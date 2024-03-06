import { print } from 'graphql';

/**
 * 
 * @param {import('graphql').DocumentNode} query 
 * @param {*} variables 
 * @returns {*}
 */
export const request = async (query, variables = {}) => {
  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({ query: print(query), variables })
  });
 
  const { data, errors } = await response.json();

  if (errors) throw Error(JSON.stringify({ errors, data }, null, 4));
  return data;
}