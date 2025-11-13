import { useEffect, useRef } from "react";

export default function BookingWidget({
  containerId = "octorate-booking-widget-page",
}) {
  const pollRef = useRef(null);
  const innerScriptRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const SCRIPT_ID = "octorate-widget-script";
    const SITE_KEY = "8e3ffa8acec77e1b7347357712d940a3";
    const PUBLIC_PATH =
      typeof import.meta !== "undefined" &&
      import.meta.env &&
      import.meta.env.BASE_URL
        ? import.meta.env.BASE_URL
        : "/";

    // --- UTIL: obtener todos los contenedores relacionados ---
    const getAllContainers = () =>
      Array.from(document.querySelectorAll('[id^="octorate-booking-widget"]'));

    // --- DEDUPE + MOVER AL HOST CORRECTO ---
    try {
      const containers = getAllContainers();
      // host preferido: primera .booking-widget-area en el DOM
      const preferredHost =
        document.querySelector(".booking-widget-area") || document.body;

      // si hay contenedores, conservar el primero y moverlo al host preferido
      if (containers.length > 0) {
        const keeper = containers[0];
        if (keeper.parentNode !== preferredHost) {
          // mover
          keeper.parentNode.removeChild(keeper);
          preferredHost.appendChild(keeper);
        }
        // eliminar los demás
        for (let i = 1; i < containers.length; i++) {
          const el = containers[i];
          if (el && el.parentNode) el.parentNode.removeChild(el);
        }
      } else {
        // no hay contenedor: crearlo dentro del host preferido
        const host = preferredHost;
        const div = document.createElement("div");
        div.id = containerId;
        div.setAttribute("data-sitekey", SITE_KEY);
        div.style.width = "100%";
        host.appendChild(div);
      }

      // Eliminar iframes fallback fuera del host (evitar duplicados)
      const iframes = Array.from(document.querySelectorAll("iframe"));
      iframes.forEach((f) => {
        try {
          const src = f.getAttribute("src") || "";
          if (src.includes("booking-widget.html")) {
            const isInsideHost = !!f.closest(".booking-widget-area");
            if (!isInsideHost) {
              if (f.parentNode) f.parentNode.removeChild(f);
            }
          }
        } catch (e) {
          /* ignore */
        }
      });
    } catch (err) {
      console.debug("BookingWidget: dedupe/move error", err);
    }

    // helpers para init/polling (mantener behavior existente)
    const safeGetContainer = () => {
      try {
        return document.getElementById(containerId);
      } catch (e) {
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
              console.info("BookingWidget: inicializador OK para", containerId);
              return true;
            }
          } catch (e) {
            /* seguir */
          }
        }
        if (target.children && target.children.length > 0) {
          console.info(
            "BookingWidget: contenedor poblado automáticamente",
            containerId
          );
          return true;
        }
      } catch (e) {
        console.debug("BookingWidget.tryInit error", e);
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
            // fallback: insertar iframe solo dentro del contenedor correcto
            insertFallbackIframe(target);
          }
        } catch (err) {
          console.error("BookingWidget: polling error", err);
        }
      }, interval);
    };

    const insertInnerScript = (target) => {
      if (!target) return;
      const innerId = `${SCRIPT_ID}-${containerId}`;
      if (document.getElementById(innerId)) return;
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "https://resx.octorate.com/octobook/resources/widget/js/form.js";
      s.setAttribute("data-sitekey", SITE_KEY);
      s.id = innerId;
      s.async = true;
      s.onload = () => {
        tryInit(target);
      };
      s.onerror = (err) => {
        console.error("BookingWidget: inner script load error", err);
      };
      target.appendChild(s);
      innerScriptRef.current = s;
    };

    const insertFallbackIframe = (target) => {
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
    };

    const ensureScriptOnBody = (target) => {
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) {
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
        const t = safeGetContainer();
        if (!tryInit(t)) {
          insertInnerScript(t);
          startPolling(t);
        }
      };
      s.onerror = (err) => {
        console.error("BookingWidget: global script load error", err);
        const t = safeGetContainer();
        insertInnerScript(t);
      };
      document.body.appendChild(s);
    };

    // iniciar
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
      data-sitekey="octorate_booking_sitekey"
      style={{ width: "100%" }}
    />
  );
}
