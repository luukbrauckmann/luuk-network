import { relative } from 'node:path'
import { normalizePath } from 'vite'

/** @type {import('vite').UserConfig} */
const defaultConfig = {
  root: "./src",
  dir: "./src/pages",
  appType: "mpa",
};

/**
 * @returns {import('vite').Plugin}
 */
export default function () {
  return {
    name: "vite-plugin-static",
    enforce: "pre",
    config(config) {
      config = { ...defaultConfig, ...config };
    }
  };
}
