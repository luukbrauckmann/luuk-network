import { print } from "graphql";

/**
 * Request data from DatoCMS
 * @param {*} query 
 * @param {*} variables 
 * @returns {Promise<*>} 
 */
export async function request(query, variables) {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
      "X-Environment": "main",
      "X-Exclude-Invalid": "true",
    },
    body: JSON.stringify({ query: print(query), variables }),
  });

  const { data } = await response.json();
  return data;
}