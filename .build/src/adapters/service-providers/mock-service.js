"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockService = void 0;
const domain_1 = require("../../domain");
const infra_1 = require("../../infra");
const getMockService = () => {
    return new domain_1.MockService(new infra_1.MockMongoDbRepository());
};
exports.getMockService = getMockService;
//# sourceMappingURL=mock-service.js.map