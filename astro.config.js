import { defineConfig, passthroughImageService } from 'astro/config';
import graphql from "@rollup/plugin-graphql";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    runtime: {
      mode: 'local',
      type: 'pages',
    },
    wasmModuleImports: true
 }),
  server: {
    port: 4344
  },
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [graphql()]
  },
  devToolbar: {
    enabled: false,
  },
});