export const prerender = false;

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