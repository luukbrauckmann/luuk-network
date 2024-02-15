import type { APIRoute } from "astro";

export const prerender = false;

const redirect = (url: string) =>
  new Response("", {
    status: 302,
    headers: { Location: url },
  });

/**
 * Redirect to the home page in the user's preferred language.
 */
export const GET: APIRoute = () => {
  return redirect(`/nl/`);
};
