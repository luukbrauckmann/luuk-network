export const prerender = false;

/**
 * @type {import('astro').APIRoute}
 * @typedef {import('astro').APIContext} context
 * @returns {Promise<Response>}
 */
export const GET = async () => {
  return new Response(
    'Beep boop! 👋 This is a response from space.', 
    {
      status: 200
    }
  );
};