import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// --- lectura segura y validación de la API key ---
const rawKey = process.env.SENDGRID_API_KEY || "";
const SENDGRID_API_KEY = rawKey.trim();

// log enmascarado para debugging (NO reveles la clave completa)
console.info(
  "SENDGRID_API_KEY cargada:",
  SENDGRID_API_KEY ? `sí (prefijo: ${SENDGRID_API_KEY.slice(0, 3)})` : "no"
);

if (!SENDGRID_API_KEY || !SENDGRID_API_KEY.startsWith("SG.")) {
  console.error(
    "SENDGRID_API_KEY inválida o no encontrada. Revisá .env y asegurate que la clave comience con 'SG.' (no compartas la clave públicamente)."
  );
  process.exit(1);
}

sgMail.setApiKey(SENDGRID_API_KEY);

const app = express();
const PORT = process.env.PORT || 4000;

// Usar CORS solo en desarrollo (en producción servimos frontend desde el mismo host)
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

// middlewares comunes
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "Faltan campos obligatorios" });
    }

    const msg = {
      to: process.env.RECEIVER_EMAIL,
      from: process.env.SENDER_EMAIL || process.env.RECEIVER_EMAIL,
      subject: subject || `Contacto web: ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje:
        ${message}
      `,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await sgMail.send(msg);
    return res.json({ ok: true });
  } catch (error) {
    console.error("send-email error:", error);
    return res
      .status(500)
      .json({ ok: false, error: "No se pudo enviar el correo" });
  }
});

// En producción: servir los archivos estáticos del build de Vite (dist)
if (process.env.NODE_ENV === "production") {
  // calcular __dirname en ESM
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const distPath = path.join(__dirname, "..", "dist"); // ajustá si build sale a otra carpeta
  app.use(express.static(distPath, { maxAge: "1d" }));

  // Para rutas SPA: devolver index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.info(`Email server listening on http://localhost:${PORT}`);
});
