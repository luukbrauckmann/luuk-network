import { translations } from "@lib/data";

let locale = "en";

export const setLocale = (/** @type {string} */ newLocale) => {
  return locale = newLocale;
}

export const getLocale = () => {
  return locale;
};

export const translate = (
  /** @type {string} */ key,
) => {
  const translation = translations[locale][key];
  if (translation) {
    return translation;
  }
  console.warn(`Translation not found for ${key}`);
  return key;
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
