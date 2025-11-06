import { useEffect, useRef } from "react";

export default function BookingWidget({
  containerId = "octorate-booking-widget-page",
}) {
  const pollRef = useRef(null);
  const innerScriptIdRef = useRef(null);

  useEffect(() => {
    const scriptId = "octorate-widget-script";
    const siteKey = "8e3ffa8acec77e1b7347357712d940a3";

    function tryInit(target) {
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
              "Octorate: inicializador llamado con éxito para",
              containerId
            );
            return true;
          }
        } catch (e) {
          // seguir intentando
        }
      }
      if (target.children && target.children.length > 0) {
        console.info(
          "Octorate: contenedor poblado automáticamente para",
          containerId
        );
        return true;
      }
      return false;
    }

    function startPolling(target, attempts = 12, interval = 300) {
      let i = 0;
      if (pollRef.current) clearInterval(pollRef.current);
      pollRef.current = setInterval(() => {
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
            "BookingWidget: polling terminó sin inicializar el widget en",
            containerId
          );
        }
      }, interval);
    }

    function insertInnerScript(target) {
      if (!target) return;
      const innerId = `${scriptId}-${containerId}`;
      innerScriptIdRef.current = innerId;
      // si ya existe inner script, no duplicar
      if (document.getElementById(innerId)) return;
      const s2 = document.createElement("script");
      s2.type = "text/javascript";
      s2.src = "https://resx.octorate.com/octobook/resources/widget/js/form.js";
      s2.setAttribute("data-sitekey", siteKey);
      s2.id = innerId;
      s2.async = true;
      s2.onload = () => {
        console.info("Octorate inner script loaded for", containerId);
        // intentar inicializar inmediatamente
        tryInit(target);
      };
      s2.onerror = (err) => {
        console.error("Octorate inner script failed to load for", containerId, err);
      };
      target.appendChild(s2);
    }

    function ensureScriptOnBody(target) {
      const existing = document.getElementById(scriptId);
      if (existing) {
        // ya existe global: intentar init y si falla insertar inner script para forzar render
        setTimeout(() => {
          if (!tryInit(target)) {
            insertInnerScript(target);
            startPolling(target);
          }
        }, 200);
        return;
      }
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "https://resx.octorate.com/octobook/resources/widget/js/form.js";
      s.setAttribute("data-sitekey", siteKey);
      s.id = scriptId;
      s.async = true;
      s.onload = () => {
        console.info("Octorate widget script loaded (appended to body)");
        // intentar init; si no, insertar inner script y poll
        if (!tryInit(target)) {
          insertInnerScript(target);
          startPolling(target);
        }
      };
      s.onerror = (err) => {
        console.error("Octorate widget failed to load", err);
        // como fallback podríamos insertar un iframe, pero primero intentamos inner script
        insertInnerScript(target);
      };
      // ANEXAR AL BODY para que persista en la SPA
      document.body.appendChild(s);
    }

    const container = document.getElementById(containerId);
    if (!container) {
      console.warn("BookingWidget: contenedor no encontrado:", containerId);
      return;
    }

    // flujo: asegurar script global en body y forzar inner script en contenedor si es necesario
    ensureScriptOnBody(container);

    return () => {
      // cleanup: detener polling y remover inner script (si fue creado por este mount)
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
      const innerId = innerScriptIdRef.current;
      if (innerId) {
        const el = document.getElementById(innerId);
        if (el && el.parentNode) el.parentNode.removeChild(el);
        innerScriptIdRef.current = null;
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
