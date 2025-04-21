import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: [],
      config: {
        scalars: {
          AWSURL: "string",
          AWSTimestamp: "number",
          AWSDate: "string",
          AWSEmail: "string",
          AWSPhone: "string",
        }
      }
    }
  }
};

export default config;