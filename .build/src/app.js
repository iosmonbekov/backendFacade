"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = void 0;
const aws_lambda_1 = require("@as-integrations/aws-lambda");
const server_1 = require("./adapters/server");
exports.graphqlHandler = (0, aws_lambda_1.startServerAndCreateLambdaHandler)((0, server_1.buildServer)(), aws_lambda_1.handlers.createAPIGatewayProxyEventRequestHandler(), {
    middleware: [
        async () => {
            return async (result) => {
                result.headers = {
                    ...result.headers,
                    'access-control-allow-headers': '*',
                    'access-control-allow-origin': '*',
                };
            };
        },
    ],
});
//# sourceMappingURL=app.js.map