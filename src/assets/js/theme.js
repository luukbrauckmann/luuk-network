import * as cookies from './cookies.js';

const defaultTheme = 'system';

export const get = () => {
  return document.documentElement.getAttribute('data-theme');
}

/** @param {'system' | 'dark' | 'light'} value */
export const set = (value) => {
  if (!value) {
    const cookie = cookies.get('theme');
    if (cookie) value = cookie.value;
    else value = defaultTheme;
  }
  const cookie = {
    name: 'theme',
    value,
  }
  cookies.set(cookie);
  document.documentElement.setAttribute('data-theme', value);
}