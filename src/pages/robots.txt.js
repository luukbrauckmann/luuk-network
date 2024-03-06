const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

/**
 * @type {import('astro').APIRoute}
 * @typedef {import('astro').APIContext} context
 * @returns {Response}
 */
export const GET = () => {
  return new Response(
    robotsTxt, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
};