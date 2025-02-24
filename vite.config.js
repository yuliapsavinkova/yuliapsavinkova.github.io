import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // Update this to match your GitHub repo name
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    historyApiFallback: true, // Ensures correct routing for SPA
  },
});
