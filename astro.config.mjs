import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

/**
 * @type {import('astro').AstroUserConfig}
 */
export default defineConfig({
  site: 'https://luukbrauckmann.dev/',
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [sitemap()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [
      alias({
        entries: [
          {
            find: '@layouts',
            replacement: resolve('./src/', 'layouts')
          }
        ]
      })
    ]
  },
  devToolbar: {
    enabled: false,
  },
});