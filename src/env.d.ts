/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATOCMS_API_KEY: string;
  readonly CF_PAGES: string;
  readonly CF_PAGES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}