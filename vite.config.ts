import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), purgeCss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // creating a chunk to @open-ish deps. Reducing the vendor chunk size
          if (id.includes("@open-ish") || id.includes("tslib")) {
            return "@open-ish";
          }
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run") ||
            id.includes("react-router")
          ) {
            return "@react-router";
          }
        },
      },
    },
  },
});
