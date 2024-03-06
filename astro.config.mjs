import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

/**
 * @type {import('astro').AstroUserConfig}
 */
export default defineConfig({
  site: 'https://luukbrauckmann.dev/',
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [sitemap()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    resolve: {
      alias: {
        "@layouts": "./src/layouts",
        "@layouts/*": "./src/layouts/*",
      }
    }
  },
  devToolbar: {
    enabled: false,
  },
});