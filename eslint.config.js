import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  js.configs.recommended,
  astro.configs["flat/recommended"],
  jsdoc.configs['flat/recommended'],
  {
    rules: {
      "no-unused-vars": "warn",
    },
  }
];
