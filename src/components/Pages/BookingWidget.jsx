import { useEffect, useRef } from "react";

export default function BookingWidget({
  containerId = "octorate-booking-widget-page",
}) {
  const pollRef = useRef(null);
  const innerScriptRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Evitar ejecución en entorno no-browser
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const SCRIPT_ID = "octorate-widget-script";
    const SITE_KEY = "8e3ffa8acec77e1b7347357712d940a3";

    // Vite base path seguro
    const PUBLIC_PATH =
      typeof import.meta !== "undefined" &&
      import.meta.env &&
      import.meta.env.BASE_URL
        ? import.meta.env.BASE_URL
        : "/";

    const safeGetContainer = () => {
      try {
        return document.getElementById(containerId);
      } catch (e) {
        console.error("BookingWidget: error accediendo al DOM", e);
        return null;
      }
    };

    const tryInit = (target) => {
      try {
        if (!target) return false;
        const inits = [
          () =>
            window.OctoBook &&
            typeof window.OctoBook.init === "function" &&
            window.OctoBook.init(target),
          () =>
            window.octorate &&
            typeof window.octorate.init === "function" &&
            window.octorate.init(target),
          () =>
            window.octobook &&
            typeof window.octobook.init === "function" &&
            window.octobook.init(target),
          () =>
            window.OctoWidget &&
            typeof window.OctoWidget.render === "function" &&
            window.OctoWidget.render(target),
        ];
        for (const fn of inits) {
          try {
            const res = fn();
            if (res !== undefined && res !== false) {
              console.info(
                "BookingWidget: octorate inicializado con éxito en",
                containerId
              );
              return true;
            }
          } catch (err) {
            // continuar intentando con el siguiente inicializador
          }
        }
        // Si el proveedor auto-renderiza al detectar el div
        if (target.children && target.children.length > 0) {
          console.info(
            "BookingWidget: contenedor ya poblado automáticamente",
            containerId
          );
          return true;
        }
      } catch (err) {
        console.debug("BookingWidget.tryInit error", err);
      }
      return false;
    };

    const startPolling = (target, attempts = 12, interval = 300) => {
      let i = 0;
      if (pollRef.current) clearInterval(pollRef.current);
      pollRef.current = setInterval(() => {
        try {
          if (tryInit(target)) {
            clearInterval(pollRef.current);
            pollRef.current = null;
            return;
          }
          i++;
          if (i >= attempts) {
            clearInterval(pollRef.current);
            pollRef.current = null;
            console.warn(
              "BookingWidget: polling agotado sin inicializar widget en",
              containerId
            );
            insertFallbackIframe(target);
          }
        } catch (err) {
          console.error("BookingWidget: error en polling", err);
        }
      }, interval);
    };

    const insertInnerScript = (target) => {
      try {
        if (!target) return;
        const innerId = `${SCRIPT_ID}-${containerId}`;
        // no duplicar
        if (document.getElementById(innerId)) {
          innerScriptRef.current = document.getElementById(innerId);
          return;
        }
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://resx.octorate.com/octobook/resources/widget/js/form.js";
        s.setAttribute("data-sitekey", SITE_KEY);
        s.id = innerId;
        s.async = true;
        s.onload = () => {
          try {
            console.info("BookingWidget: inner script cargado para", containerId);
            tryInit(target);
          } catch (e) {
            console.error("BookingWidget: error on inner script onload", e);
          }
        };
        s.onerror = (err) => {
          console.error("BookingWidget: fallo loading inner script", err);
        };
        target.appendChild(s);
        innerScriptRef.current = s;
      } catch (err) {
        console.error("BookingWidget.insertInnerScript error", err);
      }
    };

    const insertFallbackIframe = (target) => {
      try {
        if (!target) return;
        if (target.dataset.fallbackInserted === "1") return;
        target.dataset.fallbackInserted = "1";
        const iframe = document.createElement("iframe");
        iframe.src = PUBLIC_PATH + "booking-widget.html";
        iframe.style.width = "100%";
        iframe.style.height = "700px";
        iframe.style.border = "0";
        iframe.loading = "lazy";
        target.innerHTML = "";
        target.appendChild(iframe);
      } catch (err) {
        console.error("BookingWidget.insertFallbackIframe error", err);
      }
    };

    const ensureScriptOnBody = (target) => {
      try {
        const existing = document.getElementById(SCRIPT_ID);
        if (existing) {
          // ya está el script global: intentar init; si no, intentar inner + polling
          setTimeout(() => {
            const t = safeGetContainer();
            if (!tryInit(t)) {
              insertInnerScript(t);
              startPolling(t);
            }
          }, 200);
          return;
        }
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://resx.octorate.com/octobook/resources/widget/js/form.js";
        s.setAttribute("data-sitekey", SITE_KEY);
        s.id = SCRIPT_ID;
        s.async = true;
        s.onload = () => {
          try {
            console.info("BookingWidget: script global cargado en body");
            const t = safeGetContainer();
            if (!tryInit(t)) {
              insertInnerScript(t);
              startPolling(t);
            }
          } catch (e) {
            console.error("BookingWidget: error en onload del script global", e);
          }
        };
        s.onerror = (err) => {
          console.error("BookingWidget: fallo al cargar script global", err);
          const t = safeGetContainer();
          insertInnerScript(t);
        };
        document.body.appendChild(s);
      } catch (err) {
        console.error("BookingWidget.ensureScriptOnBody error", err);
      }
    };

    // flujo: si el contenedor no existe todavía (navegación SPA), usar observer
    const containerNow = safeGetContainer();
    if (!containerNow && typeof MutationObserver !== "undefined") {
      try {
        const mo = new MutationObserver((mutations, obs) => {
          const el = safeGetContainer();
          if (el) {
            obs.disconnect();
            observerRef.current = null;
            ensureScriptOnBody(el);
          }
        });
        mo.observe(document.body, { childList: true, subtree: true });
        observerRef.current = mo;
      } catch (err) {
        console.error("BookingWidget: MutationObserver error", err);
      }
    } else {
      ensureScriptOnBody(containerNow);
    }

    // cleanup
    return () => {
      try {
        if (pollRef.current) {
          clearInterval(pollRef.current);
          pollRef.current = null;
        }
        if (innerScriptRef.current && innerScriptRef.current.parentNode) {
          innerScriptRef.current.parentNode.removeChild(innerScriptRef.current);
          innerScriptRef.current = null;
        }
        if (observerRef.current) {
          observerRef.current.disconnect();
          observerRef.current = null;
        }
      } catch (err) {
        console.error("BookingWidget: cleanup error", err);
      }
    };
  }, [containerId]);

  return (
    <div
      id={containerId}
      data-sitekey="8e3ffa8acec77e1b7347357712d940a3"
      style={{ width: "100%" }}
    />
  );
}
