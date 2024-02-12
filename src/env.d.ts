/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATOCMS_API_KEY: string;
}

declare module '*.query.graphql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export = value;
}