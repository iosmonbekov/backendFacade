"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = void 0;
const server_1 = require("@apollo/server");
const graphql_modules_1 = require("graphql-modules");
const modules_1 = require("./modules");
const modules = [modules_1.MockModule];
const application = (0, graphql_modules_1.createApplication)({
    modules,
});
const schema = application.createSchemaForApollo();
function buildServer() {
    return new server_1.ApolloServer({
        schema,
        includeStacktraceInErrorResponses: false,
    });
}
exports.buildServer = buildServer;
//# sourceMappingURL=server.js.map