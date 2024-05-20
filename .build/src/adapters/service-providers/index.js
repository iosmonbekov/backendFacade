"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getService = exports.servicesByName = void 0;
const mock_service_1 = require("./mock-service");
exports.servicesByName = {
    mock: mock_service_1.getMockService,
};
const serviceInstances = new Map();
const getService = (serviceName) => {
    if (serviceInstances.has(serviceName)) {
        return serviceInstances.get(serviceName);
    }
    const service = exports.servicesByName[serviceName]();
    serviceInstances.set(serviceName, service);
    return service;
};
exports.getService = getService;
//# sourceMappingURL=index.js.map