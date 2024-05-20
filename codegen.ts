import path from 'path';

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  generates: {
    './src/adapters/modules': {
      schema: './src/adapters/modules/*/*.schema.ts',
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '../__generated-types/graphql.ts',
        filename: './__generated-types/module-types.ts',
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
      config: {
        contextType: path.resolve(__dirname, 'src/adapters/graphql/types#AppContext'),
      },
    },
  },
  config: {
    defaultMapper: 'Partial<{T}>',
  },
};

export default config;
