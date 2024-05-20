import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

import { buildServer } from './adapters/server';

export const graphqlHandler = startServerAndCreateLambdaHandler(
  buildServer(),
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    middleware: [
      async () => {
        return async (result): Promise<void> => {
          result.headers = {
            ...result.headers,
            'access-control-allow-headers': '*',
            'access-control-allow-origin': '*',
          };
        };
      },
    ],
  }
);
