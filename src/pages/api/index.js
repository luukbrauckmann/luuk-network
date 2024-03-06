/**
 * @type {import('astro').APIRoute}
 * @typedef {import('astro').APIContext} context
 * @returns {Promise<Response>}
 */
export const GET = async () => {
  return new Response(
    null, {
      status: 200,
      statusText: 'Hey there!'
    }
  );
};