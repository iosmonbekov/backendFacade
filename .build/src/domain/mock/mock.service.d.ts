import { MockRepository } from '../../infra';
import { Mock } from './mock.types';
export declare class MockService {
    private mockRepository;
    constructor(mockRepository: MockRepository);
    getMock(id: number): Promise<Mock>;
}
