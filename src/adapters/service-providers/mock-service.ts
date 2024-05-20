import { MockService } from '../../domain';
import { MockMongoDbRepository } from '../../infra';

export const getMockService = (): MockService => {
  return new MockService(new MockMongoDbRepository());
};
