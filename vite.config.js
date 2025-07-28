import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
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
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
      /**
       * custom insert position
       * @default: body-last
       */
      inject: 'body-last',
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
      /**
       * SVGO optimization options
       * @default: true
       */
      svgoOptions: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeDimensions',
            active: true,
          },
        ],
      },
    }),
  ],
});
