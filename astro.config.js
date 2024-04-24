import { defineConfig, passthroughImageService } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import graphql from "@rollup/plugin-graphql";

export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  vite: {
    plugins: [graphql()],
  },
  image: {
    service: passthroughImageService(),
  },
});
