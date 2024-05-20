export declare const servicesByName: {
    readonly mock: () => import("../../domain").MockService;
};
type ServiceName = keyof typeof servicesByName;
type ServiceByServiceName<Name extends ServiceName> = ReturnType<(typeof servicesByName)[Name]>;
export declare const getService: <Name extends "mock">(serviceName: Name) => ReturnType<{
    readonly mock: () => import("../../domain").MockService;
}[Name]>;
export {};
