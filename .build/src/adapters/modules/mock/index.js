"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockModule = void 0;
const graphql_modules_1 = require("graphql-modules");
const mock_resolver_1 = require("./mock.resolver");
const mock_schema_1 = __importDefault(require("./mock.schema"));
exports.MockModule = (0, graphql_modules_1.createModule)({
    id: 'mock',
    resolvers: mock_resolver_1.mockResolvers,
    dirname: __dirname,
    typeDefs: [mock_schema_1.default],
});
//# sourceMappingURL=index.js.map