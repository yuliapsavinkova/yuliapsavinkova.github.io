import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Set the root directory to the project folder
  base: "/", // Ensure Vite serves from the root
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    historyApiFallback: true, // Ensures correct routing for SPA
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
});
