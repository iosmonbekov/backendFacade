import { createModule } from 'graphql-modules';

import { mockResolvers } from './mock.resolver';
import mockSchema from './mock.schema';

export const MockModule = createModule({
  id: 'mock',
  resolvers: mockResolvers,
  dirname: __dirname,
  typeDefs: [mockSchema],
});
