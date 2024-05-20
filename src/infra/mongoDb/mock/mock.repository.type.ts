import { Mock } from '../../../domain';

export interface MockRepository {
  getMock(id: number): Promise<Mock>;
}

export type { Mock };
