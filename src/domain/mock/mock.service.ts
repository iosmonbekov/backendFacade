import { MockRepository } from '../../infra';
import { Mock } from './mock.types';

export class MockService {
  constructor(private mockRepository: MockRepository) {}

  public async getMock(id: number): Promise<Mock> {
    return this.mockRepository.getMock(id);
  }
}
