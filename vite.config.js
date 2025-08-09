import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
    minify: 'esbuild',
    cssCodeSplit: true, // separate CSS for non-critical imports
  },
  server: {
    port: 3001,
    strictPort: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__',
      svgoOptions: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeDimensions', active: true },
          { name: 'removeUselessStrokeAndFill', active: true },
          { name: 'removeComments', active: true },
          { name: 'removeMetadata', active: true },
        ],
      },
    }),
  ],
});
