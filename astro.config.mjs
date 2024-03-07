import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import graphql from "@rollup/plugin-graphql";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import { site } from "./scripts/site";
import icon from "astro-icon";

export default defineConfig({
  site,
  server: {
    port: 4344
  },
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [
    sitemap(), 
    icon({
      iconDir: "./src/assets/icons",
    })
  ],
  image: {
    service: passthroughImageService()
  },
  vite: {
    plugins: [graphql(), alias({
      entries: [{
        find: "@layouts",
        replacement: resolve("./src/", "layouts")
      }, {
        find: "@assets",
        replacement: resolve("./src/", "assets")
      }, {
        find: "@lib",
        replacement: resolve("./src/", "lib")
      }, {
        find: "@components",
        replacement: resolve("./src/", "components")
      }]
    })]
  },
  devToolbar: {
    enabled: false
  }
});