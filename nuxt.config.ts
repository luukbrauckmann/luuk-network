// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  app: {
    head: {
      title: "Luuk Brauckmann",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "color-scheme",
          content: "light dark",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      datocmsApiToken: process.env.DATOCMS_API_TOKEN,
      datocmsGraphqlUrl: process.env.DATOCMS_GRAPHQL_URL,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
