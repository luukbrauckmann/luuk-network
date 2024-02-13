import graphql from "@rollup/plugin-graphql";
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import type { PluginOption } from 'vite';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  vite: {
    plugins: [
      graphql() as PluginOption,
    ],
  },
});
