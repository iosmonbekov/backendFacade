import { getService } from '../../service-providers';
import { MockModule } from './__generated-types/module-types';

export const mockResolvers: MockModule.Resolvers = {
  Query: {
    getMock: async (_parent, { id }) => {
      const mockService = getService('mock');

      return mockService.getMock(id);
    },
  },
};
