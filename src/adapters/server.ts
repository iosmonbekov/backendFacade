import { ApolloServer } from '@apollo/server';
import { Module, createApplication } from 'graphql-modules';
import { MockModule } from './modules';

const modules: Module[] = [MockModule];

const application = createApplication({
  modules,
});

const schema = application.createSchemaForApollo();

export function buildServer(): ApolloServer {
  return new ApolloServer({
    schema,
    includeStacktraceInErrorResponses: false,
  });
}
