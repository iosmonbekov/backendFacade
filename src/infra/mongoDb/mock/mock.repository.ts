import { MockRepository, Mock } from './mock.repository.type';

export class MockMongoDbRepository implements MockRepository {
  async getMock(id: number): Promise<Mock> {
    return {
      id,
      name: 'mock-name',
      age: 20,
      job: 'mock-job',
    };
  }
}
