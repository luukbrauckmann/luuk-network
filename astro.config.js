import "dotenv/config";

import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import graphql from "@rollup/plugin-graphql";
import sitemap from "@astrojs/sitemap";

const { CF_PAGES_URL } = process.env;

export default defineConfig({
  site: CF_PAGES_URL,
  output: "hybrid",
  server: { port: 4832 },
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
