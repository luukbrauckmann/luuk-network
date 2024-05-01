import { translations } from "@lib/data";

export const translate = (/** @type {string} */ key) => {
  return translations?.[key]?.[key] ?? key;
};

export const paths = (page) => {
  let paths = [];

  let x = page;
  while (x) {
    if (paths.length === 0) {
      paths = x._allSlugLocales;
    } else {
      paths = paths.map(({ locale, value }) => {
        const path = x._allSlugLocales.find((path) => path.locale === locale);
        value = `${path.value}/${value}`;
        return { locale, value };
      });
    }
    x = x.parentPage;
  }

  return paths;
};
