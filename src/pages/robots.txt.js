const robotsTxt = ({ site }) =>
  `
User-agent: *
Allow: /

Sitemap: ${site}/sitemap-index.xml
`.trim();

export const GET = (context) => {
  return new Response(
    robotsTxt({
      site: context.site.origin,
    }),
    {
      headers: {
        "content-type": "text/plain",
      },
    },
  );
};
