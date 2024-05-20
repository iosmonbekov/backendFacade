"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMongoDbRepository = void 0;
class MockMongoDbRepository {
    async getMock(id) {
        return {
            id,
            name: 'mock-name',
            age: 20,
            job: 'mock-job',
        };
    }
}
exports.MockMongoDbRepository = MockMongoDbRepository;
//# sourceMappingURL=mock.repository.js.map