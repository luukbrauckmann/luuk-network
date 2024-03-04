import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { site } from "./scripts/site.ts";

console.log(import.meta.env);


export default defineConfig({
  site,
  output: "hybrid",
  adapter: cloudflare({
    mode: "directory",
    functionPerRoute: true,
  }),
  image: {
    service: passthroughImageService(),
  },
  integrations: [sitemap()],
});
