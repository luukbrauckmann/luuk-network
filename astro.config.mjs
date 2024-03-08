import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import graphql from "@rollup/plugin-graphql";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import { site } from "./scripts/site";

export default defineConfig({
  site,
  server: {
    port: 4344,
  },
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [sitemap()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [
      graphql(),
      alias({
        entries: [
          {
            find: "@assets",
            replacement: resolve("./src/", "assets"),
          },
          {
            find: "@blocks",
            replacement: resolve("./src/", "blocks"),
          },
          {
            find: "@components",
            replacement: resolve("./src/", "components"),
          },
          {
            find: "@layouts",
            replacement: resolve("./src/", "layouts"),
          },
          {
            find: "@lib",
            replacement: resolve("./src/", "lib"),
          },
        ],
      }),
    ],
  },
  devToolbar: {
    enabled: false,
  },
});
