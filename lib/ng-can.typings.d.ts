export interface INgCanPermissionsCheckable {
    loadPermissions(permissions: INgCanPermissions): void;
    checkConditions(conditions: INgCanPermissions, strict?: boolean): boolean;
}
export interface INgCanPermissions {
    [key: string]: boolean;
}
