import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";
import graphql from "@rollup/plugin-graphql";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 4344
  },
  output: "server",
  adapter: netlify(),
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
    ]
  }
});