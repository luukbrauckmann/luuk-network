import { setLocale } from "@lib/js/i18n";

/**
 * @type {import("astro").MiddlewareHandler}
 */
export const i18n = async ({ params }, next) => {
  if (params.locale) setLocale("nl");
  const repsonse = await next();
  return repsonse;
}