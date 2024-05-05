import { print } from "graphql";

/**
 * @param {import("graphql").DocumentNode} query
 * @param {object} variables
 */
export async function request(query, variables = {}) {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.DATOCMS_READONLY_API_TOKEN}`,
    },
    body: JSON.stringify({ query: print(query), variables }),
  });

  const { data, errors } = await response.json();
  return data ? data : { errors };
}
