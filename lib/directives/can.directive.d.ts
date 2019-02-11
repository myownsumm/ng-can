import { ElementRef, OnInit } from '@angular/core';
import { NgCanService } from '../services/ng-can.service';
import { IModuleOptions, INgCanPermissions, THideApproach } from '../ng-can.typings';
export declare class NgCanDirective implements OnInit {
    protected el: ElementRef;
    protected ngCanService: NgCanService;
    protected options: IModuleOptions;
    conditions: INgCanPermissions;
    permissions: INgCanPermissions;
    strictMode: boolean;
    hideApproach: THideApproach;
    constructor(el: ElementRef, ngCanService: NgCanService, options: IModuleOptions);
    ngOnInit(): void;
    hideElement(): void;
    showElement(): void;
}
