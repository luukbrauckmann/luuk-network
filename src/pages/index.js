import parser from "accept-language-parser";
import { site } from "@lib/data";

export const prerender = false;

const { locales } = site;

const redirect = (url) =>
  new Response("", {
    status: 302,
    headers: { Location: url },
  });

export const GET = async ({ cookies, request }) => {
  const userLocale = cookies.get("locale")?.value;
  if (userLocale && locales.includes(userLocale)) {
    return redirect(`/${userLocale}/`);
  }

  const systemLocale = parser.pick(
    locales,
    request.headers.get("accept-language"),
  );
  if (systemLocale) {
    return redirect(`/${systemLocale}/`);
  }

  return redirect(locales[0]);
};
