// @ts-check
import { defineConfig } from "astro/config";

// Estático: o build vira arquivos servidos pelo GitHub Pages
// (`.github/workflows/pages.yml`).
export default defineConfig({
  site: "https://databando.com",
  trailingSlash: "ignore",
  // CSS e JS sempre em arquivo: a CSP do `<meta>` em `Base.astro` não aceita
  // estilo nem script inline, e o Astro põe no HTML o script menor que este limite.
  build: { format: "directory", inlineStylesheets: "never" },
  vite: { build: { assetsInlineLimit: 0 } },
});
