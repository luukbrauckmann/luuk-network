import graphql from "@rollup/plugin-graphql";
import { defineConfig } from "astro/config";
import type { PluginOption } from 'vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      graphql() as PluginOption,
    ],
  },
});
