import { getMockService } from './mock-service';

export const servicesByName = {
  mock: getMockService,
} as const;

type ServiceName = keyof typeof servicesByName;

type ServiceByServiceName<Name extends ServiceName> = ReturnType<(typeof servicesByName)[Name]>;

const serviceInstances = new Map();

export const getService = <Name extends ServiceName>(
  serviceName: Name
): ServiceByServiceName<Name> => {
  if (serviceInstances.has(serviceName)) {
    return serviceInstances.get(serviceName) as ServiceByServiceName<Name>;
  }

  const service = servicesByName[serviceName]();

  serviceInstances.set(serviceName, service);

  return service as ServiceByServiceName<Name>;
};
