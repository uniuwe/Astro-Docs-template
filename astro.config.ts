import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// ASTRO LAYOUTS PLUGIN
import astroLayouts from "astro-layouts"

const layoutOptions = {
  "pages/writings/**/*.mdx": "/src/layouts/Default.astro"
}

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  markdown: {
    // extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'github-dark',
      langs: [],
      wrap: true,
    },
    remarkPlugins: [
      [astroLayouts, layoutOptions]
    ]
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
  ],
});
