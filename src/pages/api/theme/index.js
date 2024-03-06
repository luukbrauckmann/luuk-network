export const prerender = false;

/**
 * @type {import('astro').APIRoute}
 * @typedef {import('astro').APIContext} context
 * @returns {Response}
 */
export const GET = ({ cookies, url }) => {
  const theme = url.searchParams.get("theme");
  const pathname = url.searchParams.get("pathname");
  const redirect = url.searchParams.get("redirect") || true;
  cookies.set("theme", theme, { path: "/" });

  if (redirect === true) {
    return new Response(null, {
      status: 302,
      headers: {
        location: pathname,
      },
    });
  } else {
    return new Response(null, { status: 200 });
  }
};
