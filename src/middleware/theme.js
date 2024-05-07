/**
 * @type {import("astro").MiddlewareHandler}
 */
export const theme = async ({ cookies }, next) => {
  console.log("theme");
  const repsonse = await next();
  return repsonse;
}