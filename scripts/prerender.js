import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist");
const indexHtmlPath = path.join(distPath, "index.html");

// ✅ Rutas a pre-renderizar (sin carpetas, archivos planos)
const routes = [
  { path: "/", file: "index.html", title: "Inicio" },
  { path: "/about", file: "about.html", title: "Sobre Nosotros" },
  { path: "/services", file: "services.html", title: "Servicios" },
  { path: "/gallery", file: "gallery.html", title: "Galería" },
  { path: "/contact", file: "contact.html", title: "Contacto" },
  { path: "/room/2a", file: "room-2a.html", title: "Habitación 2 Ambientes" },
  { path: "/room/3a", file: "room-3a.html", title: "Habitación 3 Ambientes" },
];

console.log("🚀 Iniciando pre-renderizado...\n");

// Verificar que existe dist/index.html
if (!fs.existsSync(indexHtmlPath)) {
  console.error("❌ Error: dist/index.html no existe.");
  process.exit(1);
}

// Leer template HTML
let indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

// ✅ Modificar index.html si es necesario (ejemplo: quitar "aaaaaaaas")
indexHtml = indexHtml.replace(/Pampaaaaaaaaas/g, "Pampas");

// Guardar index.html modificado
fs.writeFileSync(indexHtmlPath, indexHtml);
console.log("✅ index.html actualizado");

// Crear HTML por cada ruta
routes.forEach((route) => {
  const fullPath = path.join(distPath, route.file);

  // Copiar HTML (sin ajustar rutas, todo está en la raíz)
  fs.writeFileSync(fullPath, indexHtml);
  console.log(`✅ ${route.title.padEnd(25)} → ${route.file}`);
});

console.log("\n🎉 Pre-renderizado completado!\n");
console.log("📁 Todos los archivos en: dist/\n");
