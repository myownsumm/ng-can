import { Injectable, NgModule, Directive, ElementRef, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCanService {
    constructor() {
        this._permissions = {};
    }
    /**
     * @param {?} permissions
     * @return {?}
     */
    loadPermissions(permissions) {
        this._permissions = permissions;
    }
    /**
     * @param {?} conditions
     * @param {?=} strict
     * @return {?}
     */
    checkConditions(conditions, strict) {
        /** @type {?} */
        let allowed = true;
        for (const key in conditions) {
            if (!conditions.hasOwnProperty(key)) {
                continue;
            }
            if (this._permissions[key] === undefined) {
                if (!strict) {
                    continue;
                }
                allowed = false;
                break;
            }
            if (this._permissions[key] !== conditions[key]) {
                allowed = false;
                break;
            }
        }
        return allowed;
    }
}
NgCanService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgCanService.ctorParameters = () => [];
/** @nocollapse */ NgCanService.ngInjectableDef = defineInjectable({ factory: function NgCanService_Factory() { return new NgCanService(); }, token: NgCanService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCanDirective {
    /**
     * @param {?} el
     * @param {?} ngCanService
     */
    constructor(el, ngCanService) {
        this.el = el;
        this.ngCanService = ngCanService;
        this.conditions = {};
        this.permissions = {};
        this.hideElement();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngCanService.loadPermissions(this.permissions);
        /** @type {?} */
        const needToShow = this.ngCanService.checkConditions(this.conditions, this.strictMode);
        if (needToShow) {
            this.showElement();
        }
    }
    /**
     * @return {?}
     */
    hideElement() {
        this.el.nativeElement.style.visibility = 'hidden';
    }
    /**
     * @return {?}
     */
    showElement() {
        this.el.nativeElement.style.visibility = 'visible';
    }
}
NgCanDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ng-can]'
            },] }
];
/** @nocollapse */
NgCanDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgCanService }
];
NgCanDirective.propDecorators = {
    conditions: [{ type: Input }],
    permissions: [{ type: Input }],
    strictMode: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCanModule {
}
NgCanModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgCanDirective
                ],
                imports: [],
                exports: [
                    NgCanDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgCanService, NgCanModule, NgCanDirective };

//# sourceMappingURL=ng-can.js.map