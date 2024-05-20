"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockResolvers = void 0;
const service_providers_1 = require("../../service-providers");
exports.mockResolvers = {
    Query: {
        getMock: async (_parent, { id }) => {
            const mockService = (0, service_providers_1.getService)('mock');
            return mockService.getMock(id);
        },
    },
};
//# sourceMappingURL=mock.resolver.js.map