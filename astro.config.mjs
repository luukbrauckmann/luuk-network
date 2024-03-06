import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

/**
 * @type {import('astro').AstroUserConfig}
 */
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321/',
  output: "hybrid",
  adapter: cloudflare({
    wasmModuleImports: true
  }),
  integrations: [sitemap()]
});