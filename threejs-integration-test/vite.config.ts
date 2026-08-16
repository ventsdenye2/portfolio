import { defineConfig } from "vite";

export default defineConfig({
  server: {
    // Keep the origin stable so module presets saved in localStorage remain
    // available across restarts. Do not silently switch to another port.
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});
