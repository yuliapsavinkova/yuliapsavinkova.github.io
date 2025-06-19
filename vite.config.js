import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { readFileSync } from 'fs';
import { resolve } from 'path';
// import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    port: 3001,
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
  plugins: [
    createHtmlPlugin({
      /**
       * After all the Vite transformations,
       * this hook allows to modify the final HTML.
       */
      inject: {
        data: {
          // Read the SVG sprite file content
          svgSprite: readFileSync(resolve(__dirname, 'src/assets/sprites/icons.svg'), 'utf-8'),
        },
      },
      // Use `minify: true` for production to minify HTML
      // minify: process.env.NODE_ENV === 'production',
    }),
  ],
});
