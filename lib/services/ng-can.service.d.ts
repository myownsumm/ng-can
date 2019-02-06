import { INgCanPermissions, INgCanPermissionsCheckable } from '../ng-can.typings';
export declare class NgCanService implements INgCanPermissionsCheckable {
    private _permissions;
    constructor();
    loadPermissions(permissions: {
        [key: string]: boolean;
    }): void;
    checkConditions(conditions: INgCanPermissions, strict: boolean): boolean;
}
