import type { APIRoute } from "astro";

const robotsTxt = ({ site }: { site: string }) =>
  `
User-agent: *
Allow: /

Sitemap: ${site}/sitemap-index.xml
`.trim();

export const GET: APIRoute = (context) => {
  return new Response(
    robotsTxt({
      site: context.site!.origin,
    }),
    {
      headers: {
        "content-type": "text/plain",
      },
    },
  );
};
