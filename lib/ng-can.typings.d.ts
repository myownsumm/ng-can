import { ElementRef } from '@angular/core';
export interface INgCanPermissionsCheckable {
    loadPermissions(permissions: INgCanPermissions): void;
    checkConditions(conditions: INgCanPermissions, strict?: boolean): boolean;
}
export interface INgCanHideApproachesControllable {
    hideElement(el: ElementRef, hideApproach: THideApproach): void;
    showElement(el: ElementRef, hideApproach: THideApproach): void;
}
export interface INgCanPermissions {
    [key: string]: boolean;
}
export declare type THideApproach = 'visibility' | 'hidden';
export interface IModuleOptions {
    hide_approach: THideApproach;
}
