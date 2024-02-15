import graphql from "@rollup/plugin-graphql";
import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

const port = 4321;
export const site = process.env.CF_PAGES
  ? process.env.CF_PAGES_URL
  : `http://localhost:${port}`;

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    mode: "directory",
    functionPerRoute: true,
    runtime: {
      mode: "local",
      type: "pages",
    },
  }),
  image: {
    service: passthroughImageService(),
  },
  output: "hybrid",
  site,
  integrations: [sitemap()],
  server: { port },
  vite: {
    plugins: [graphql()],
  },
});
