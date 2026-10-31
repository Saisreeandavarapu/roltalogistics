import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Vite plugin to ensure 100% reliable SPA routing across all web hosts:
 * - Generates `404.html` (for GitHub Pages, Surge, etc.)
 * - Generates static route directories with `index.html` (e.g., `dist/about/index.html`)
 *   so that even if web server rewrites/.htaccess are not configured or missed during upload,
 *   direct URL visits and page refreshes on `/about`, `/contact`, `/services`, `/routes`
 *   always serve the page with HTTP 200 instead of a 404 error.
 */
function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const html = fs.readFileSync(indexPath, 'utf-8');

      // 1. Create 404.html for GitHub Pages, Surge, etc.
      fs.writeFileSync(path.join(distDir, '404.html'), html);

      // 2. Pre-generate route directories with index.html for static hosting fallback
      const routes = ['about', 'services', 'routes', 'contact'];
      for (const route of routes) {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaFallbackPlugin(),
  ],
});
