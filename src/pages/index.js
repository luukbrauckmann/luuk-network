export const prerender = false;

/**
 * @type {import('astro').APIRoute}
 * @typedef {import('astro').APIContext} context
 * @returns {Promise<Response>}
 */
export const GET = async () => {
  return new Response(
    null, {
      status: 302,
      headers: {
        location: '/nl/'
      }
    }
  );
};