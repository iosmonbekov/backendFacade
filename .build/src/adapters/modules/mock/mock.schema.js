"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = (0, graphql_tag_1.default) `
  type Query {
    getMock(id: Int!): Mock
  }

  type Mock {
    name: String!
    age: Int!
    job: String
  }
`;
//# sourceMappingURL=mock.schema.js.map