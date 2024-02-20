import graphql from "@rollup/plugin-graphql";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

const port = 4321;
export const site = process.env.CF_PAGES ? process.env.CF_PAGES_URL : `http://localhost:${port}`;

export default defineConfig({
  adapter: cloudflare({
    mode: "directory",
    functionPerRoute: true,
    runtime: {
      mode: "local",
      type: "pages"
    }
  }),
  image: {
    service: passthroughImageService()
  },
  output: "hybrid",
  site,
  integrations: [sitemap(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })],
  server: {
    port
  },
  vite: {
    plugins: [graphql(), topLevelAwait(), wasm()]
  }
});