import { ElementRef } from '@angular/core';
import { INgCanPermissions, INgCanPermissionsCheckable, INgCanHideApproachesControllable, THideApproach } from '../ng-can.typings';
export declare class NgCanService implements INgCanPermissionsCheckable, INgCanHideApproachesControllable {
    private _permissions;
    constructor();
    loadPermissions(permissions: {
        [key: string]: boolean;
    }): void;
    checkConditions(conditions: INgCanPermissions, strict?: boolean): boolean;
    hideElement(el: ElementRef, hideApproach: THideApproach): void;
    showElement(el: ElementRef, hideApproach: THideApproach): void;
}
