
export const prerender = false;

const redirect = (url) =>
  new Response("", {
    status: 302,
    headers: { Location: url },
  });

export const GET = () => {
  return redirect(`/nl/`);
};
