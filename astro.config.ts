import graphql from "@rollup/plugin-graphql";
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import type { PluginOption } from 'vite';

const port = 4321;
export const site = process.env.CF_PAGES ? process.env.CF_PAGES_URL : `http://localhost:${port}`;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
  server: { port },
  vite: {
    plugins: [
      graphql() as PluginOption,
    ],
  },
});
