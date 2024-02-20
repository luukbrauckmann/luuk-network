/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATOCMS_API_KEY: string;
}

declare module "*.graphql" {
  const content: any;
  export default content;
}