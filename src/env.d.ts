/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATOCMS_READONLY_API_TOKEN: string;
  readonly CF_PAGES_URL: string;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export = value;
}
