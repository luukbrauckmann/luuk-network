import { defineConfig, passthroughImageService } from 'astro/config';
import graphql from "@rollup/plugin-graphql";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  server: {
    port: 4344
  },
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [graphql(), alias({
      entries: [{
        find: "@assets",
        replacement: resolve("./src/", "assets")
      }, {
        find: "@blocks",
        replacement: resolve("./src/", "blocks")
      }, {
        find: "@components",
        replacement: resolve("./src/", "components")
      }, {
        find: "@layouts",
        replacement: resolve("./src/", "layouts")
      }, {
        find: "@lib",
        replacement: resolve("./src/", "lib")
      }]
    })]
  },
});