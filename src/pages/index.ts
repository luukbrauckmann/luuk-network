import type { APIRoute } from "astro";

export const prerender = false;

const redirect = (url: string) =>
  new Response("", {
    status: 302,
    headers: { Location: url },
  });

export const GET: APIRoute = () => {
  return redirect(`/nl/`);
};
