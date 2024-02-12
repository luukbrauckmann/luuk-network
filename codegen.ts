import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "https://graphql.datocms.com": {
      headers: {
        Authorization: process.env.DATOCMS_API_KEY,
        "X-Exclude-Invalid": "true"
      }
    }
  },
  generates: {
    "src/lib/types/datocms.d.ts": {
      plugins: [
        "typescript", 
        {
          "typescript-operations": {
            strictScalars: true,
            scalars: {
              BooleanType: 'boolean',
              CustomData: 'Record<string, unknown>',
              Date: 'string',
              DateTime: 'string',
              FloatType: 'number',
              IntType: 'number',
              ItemId: 'string',
              JsonField: 'unkown',
              MetaTagAttributes: 'Record<string, string>',
              UploadId: 'string',
            },
          }
        }, 
        "typescript-document-nodes"
      ],
    }
  }
};

export default config;
