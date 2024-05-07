import { sequence } from "astro:middleware";
import { i18n } from "./i18n";
import { theme } from "./theme";

/**
 * @type {import("astro").MiddlewareHandler}
 */
export const onRequest = sequence(i18n, theme);