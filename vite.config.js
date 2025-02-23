import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Set the root directory to the project folder
  base: "/", // Ensure Vite serves from the root
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html", // Main entry point for index.html
        about: "public/about.html",
        work: "public/work.html",
        contact: "public/contact.html",
      },
    },
  },
});
