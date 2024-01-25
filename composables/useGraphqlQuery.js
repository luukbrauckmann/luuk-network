export default (options) => {
  const { query, variables = {} } = options;
  const runtimeConfig = useRuntimeConfig();
  const key = JSON.stringify(options);

  return useFetch(runtimeConfig.public.datocmsGraphqlUrl, {
    key,
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.datocmsApiToken}`,
    },
    body: {
      query,
      variables,
    },
    transform: ({ data, errors }) => {
      if (errors) throw new errors();

      return data;
    },
  });
};
