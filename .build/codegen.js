"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config = {
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
                contextType: path_1.default.resolve(__dirname, 'src/adapters/graphql/types#AppContext'),
            },
        },
    },
    config: {
        defaultMapper: 'Partial<{T}>',
    },
};
exports.default = config;
//# sourceMappingURL=codegen.js.map