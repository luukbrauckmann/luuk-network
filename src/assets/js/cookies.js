/**
 * Cookie type definition
 * 
 * @typedef {Object} Cookie
 * @property {string} name
 * @property {*} value
 * @property {string} [domain]
 * @property {string} [expires]
 * @property {string} [maxAge]
 * @property {string} [path]
 * @property {boolean} [samesite]
 * @property {boolean} [secure]
 */

/**
 * 
 * @param {Cookie["name"]} name 
 * @returns {Cookie}
 */
export const get = (name) => {
  const rawCookie = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))[0].split('=');

  if (!rawCookie) return;

  let cookie = {
    name: rawCookie[0],
    value: rawCookie[1],
  }

  return cookie;
}

/**
 * @param {Cookie} cookie 
 * @returns {Cookie}
 */
export const set = (cookie) => {
  console.log(cookie);

  document.cookie = `
    ${cookie.name}=${JSON.stringify(cookie.value)};
  `;

  console.log(document.cookie);

  return get(cookie.name);
}