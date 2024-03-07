import * as cookies from './cookies.js';

const defaultTheme = 'system';

export const get = () => {
  return document.documentElement.getAttribute('data-theme');
}

/** @param {'system' | 'dark' | 'light'} value */
export const set = (value = defaultTheme) => {
  const cookie = {
    name: 'theme',
    value,
  }
  cookies.set(cookie);
  document.documentElement.setAttribute('data-theme', value);
}