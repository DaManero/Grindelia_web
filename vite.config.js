import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["bootstrap", "react-bootstrap", "rsuite"],
        },
      },
    },
    sourcemap: false,
  },
  css: {
    devSourcemap: false,
  },
  server: {
    fs: {
      allow: [".."],
    },
    mimeTypes: {
      "application/javascript": ["js", "mjs"],
    },
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
