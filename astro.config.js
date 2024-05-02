import "dotenv/config";

import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import graphql from "@rollup/plugin-graphql";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.CF_PAGES_URL,
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: {
    plugins: [graphql()],
  },
  image: {
    service: passthroughImageService(),
  },
  devToolbar: {
    enabled: false,
  },
});
