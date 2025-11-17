import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY?.trim() || "";

  if (!SENDGRID_API_KEY) {
    return res.status(500).json({ ok: false, error: "Config error" });
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

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
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      console.error("SendGrid error:", error.response.body);
    }
    return res
      .status(500)
      .json({ ok: false, error: "No se pudo enviar el correo" });
  }
}
