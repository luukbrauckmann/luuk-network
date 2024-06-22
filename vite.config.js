import tsconfigPaths from "vite-tsconfig-paths";

/** @type {import("vite").UserConfig} */
export default {
  root: "src/pages",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [tsconfigPaths()]
};
