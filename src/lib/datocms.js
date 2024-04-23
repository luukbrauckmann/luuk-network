import { print } from "graphql";

export const request = async (query, variables = {}) => {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.DATOCMS_READONLY_API_TOKEN}`,
    },
    body: JSON.stringify({ query: print(query), variables }),
  });

  const { data } = await response.json();

  return data;
};
