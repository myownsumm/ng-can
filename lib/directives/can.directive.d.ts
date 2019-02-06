import { ElementRef, OnInit } from '@angular/core';
import { NgCanService } from '../services/ng-can.service';
import { INgCanPermissions } from '../ng-can.typings';
export declare class NgCanDirective implements OnInit {
    protected el: ElementRef;
    protected ngCanService: NgCanService;
    conditions: INgCanPermissions;
    permissions: INgCanPermissions;
    strictMode: boolean;
    constructor(el: ElementRef, ngCanService: NgCanService);
    ngOnInit(): void;
    hideElement(): void;
    showElement(): void;
}
