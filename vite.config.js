import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
    // Optional: minify inline CSS/JS
    minify: 'esbuild',
    cssCodeSplit: false, // Important: combine all CSS into one file to inline
    // sourcemap: true,
  },
  server: {
    port: 3001,
    strictPort: true,
    open: true,
    historyApiFallback: true, // Ensures correct routing for SPA
  },
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
            active: false, // Keep viewBox for proper scaling
          },
          {
            name: 'removeDimensions',
            active: true, // Remove width/height attributes
          },
          {
            name: 'removeUselessStrokeAndFill',
            active: true,
          },
          {
            name: 'removeComments',
            active: true,
          },
          {
            name: 'removeMetadata',
            active: true,
          },
        ],
      },
    }),
    // visualizer({
    //   filename: 'dist/stats.html', // path to generated report
    //   open: true, // automatically opens it after build
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
});
