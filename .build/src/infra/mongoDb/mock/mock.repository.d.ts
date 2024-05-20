import { MockRepository, Mock } from './mock.repository.type';
export declare class MockMongoDbRepository implements MockRepository {
    getMock(id: number): Promise<Mock>;
}
