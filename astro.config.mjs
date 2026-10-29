// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://j-created.github.io/HOME/
  // [PENDENTE] Com domínio próprio, trocar `site` pelo domínio e remover `base`.
  site: 'https://j-created.github.io',
  base: '/HOME/',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
