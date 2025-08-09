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
    cssCodeSplit: true,
    // sourcemap: true,
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
    {
      name: 'html-preload-css',
      apply: 'build',
      enforce: 'post',
      generateBundle(options, bundle) {
        const htmlFileName = 'index.html';
        const htmlChunk = bundle[htmlFileName];
        if (!htmlChunk) {
          this.error(`Could not find ${htmlFileName} in bundle`);
          return;
        }

        // Find all CSS files in the bundle
        const cssFiles = Object.values(bundle)
          .filter((f) => f.type === 'asset' && f.fileName.endsWith('.css'))
          .map((f) => f.fileName);

        let htmlSource = htmlChunk.source;

        // Build preload links string
        const preloadLinks = cssFiles
          .map((file) => {
            return `<link rel="preload" href="${file}" as="style" crossorigin="anonymous">`;
          })
          .join('\n');

        // Inject preload links into <head> before existing stylesheets
        htmlSource = htmlSource.replace(/(<\/head>)/i, preloadLinks + '\n$1');

        // Replace the html chunk source
        htmlChunk.source = htmlSource;
      },
    },
  ],
});
