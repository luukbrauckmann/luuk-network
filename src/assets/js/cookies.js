/**
 * 
 * @param {string} name 
 * @returns {string}
 */
export const get = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

/**
 * 
 * @param {string} name 
 * @param {*} value 
 * @returns {string}
 */
export const set = (name, value) => {
  console.log(name, value);
  return get(name);
}