import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx()]
});
