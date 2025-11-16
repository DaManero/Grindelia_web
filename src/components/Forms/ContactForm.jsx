import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Base de API: VITE_API_BASE_URL o localhost:4000 en dev
  const API_BASE =
    (import.meta.env && import.meta.env.VITE_API_BASE_URL) ||
    (typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:4000"
      : "");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Por favor completá todos los campos obligatorios.");
      return;
    }
    setLoading(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000); // 12s
    try {
      const res = await fetch(`${API_BASE}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "Consulta desde formulario web",
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Server responded with ${res.status}`);
      }

      const contentType = res.headers.get("content-type") || "";
      let data = null;
      if (contentType.includes("application/json")) {
        data = await res.json().catch(() => null);
      }

      if (!data || data.ok) {
        alert("Mensaje enviado. Gracias.");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error al enviar: " + (data.error || "intente más tarde"));
      }
    } catch (err) {
      console.error("ContactForm submit error:", err);
      if (err.name === "AbortError") {
        alert("El servidor no responde. Reintentá más tarde.");
      } else if (/ECONNREFUSED/i.test(err.message || "")) {
        alert(
          "No se pudo conectar con el servidor. Verificá que el backend esté corriendo."
        );
      } else {
        alert(
          "Error al enviar el mensaje. Reintentá más tarde. (" +
            (err.message || "error") +
            ")"
        );
      }
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cs_form cs_style_2">
      <label>Nombre y Apellido*</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        type="text"
        className="cs_form_field_2 cs_radius_20"
      />
      <div className="cs_height_16 cs_height_lg_16" />
      <label>Email*</label>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        className="cs_form_field_2 cs_radius_20"
      />
      <div className="cs_height_16 cs_height_lg_16" />
      <label>Comentarios*</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        cols={30}
        rows={6}
        className="cs_form_field_2 cs_radius_20"
      />
      <div className="cs_height_25 cs_height_lg_25" />
      <button
        disabled={loading}
        type="submit"
        className="cs_btn cs_style_2 cs_accent_btn cs_medium cs_radius_20 cs_fs_15"
      >
        <b>{loading ? "Enviando..." : "Enviar Mensaje"}</b>
      </button>
    </form>
  );
}
