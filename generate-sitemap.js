import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://yuliapsavinkova.github.io';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const outputPath = resolve(__dirname, 'public', 'sitemap.xml');

try {
  await writeFile(outputPath, sitemap);
  console.log('✅ sitemap.xml generated at', outputPath);
} catch (error) {
  console.error('❌ Failed to generate sitemap:', error);
}
