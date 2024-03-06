import * as cookies from './cookies.js';

export const reload = () => {
  const selectedTheme = cookies.get('theme') || 'system';
  document.documentElement.setAttribute('data-theme', selectedTheme);
}

reload();