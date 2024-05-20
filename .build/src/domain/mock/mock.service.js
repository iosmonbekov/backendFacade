"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockService = void 0;
class MockService {
    constructor(mockRepository) {
        this.mockRepository = mockRepository;
    }
    async getMock(id) {
        return this.mockRepository.getMock(id);
    }
}
exports.MockService = MockService;
//# sourceMappingURL=mock.service.js.map