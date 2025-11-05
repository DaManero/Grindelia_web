import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Asegúrate de que la base sea correcta
  build: {
    // Genera archivos con nombres consistentes
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    // Desactiva source maps en producción si no los necesitas
    sourcemap: false,
  },
  server: {
    mimeTypes: {
      "application/javascript": ["js", "mjs"],
    },
  },
});
