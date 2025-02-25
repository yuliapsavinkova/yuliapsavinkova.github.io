import { defineConfig } from "vite";
// import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  base: "/",
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
  // plugins: [
  //   imagemin({
  //     gifsicle: {
  //       optimizationLevel: 3, // Optimize GIFs
  //     },
  //     mozjpeg: {
  //       quality: 75, // Optimize JPEG
  //     },
  //     optipng: {
  //       optimizationLevel: 5, // Optimize PNG
  //     },
  //     svgo: {
  //       plugins: [
  //         { name: "removeViewBox", active: false },
  //         { name: "removeEmptyAttrs", active: false },
  //       ],
  //     },
  //   }),
  // ],
});
