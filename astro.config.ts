import graphql from "@rollup/plugin-graphql";
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import type { PluginOption } from 'vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luukbrauckmann.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [
      graphql() as PluginOption,
    ],
  },
});
