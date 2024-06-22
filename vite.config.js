import tsconfigPaths from "vite-tsconfig-paths";
import ssg from "./plugins/vite-plugin-ssg";

/** @type {import("vite").UserConfig} */
export default {
  plugins: [
    tsconfigPaths(), 
    ssg()
  ]
};
