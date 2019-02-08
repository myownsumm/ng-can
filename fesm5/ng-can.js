import { Injectable, NgModule, Directive, ElementRef, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgCanService = /** @class */ (function () {
    function NgCanService() {
        this._permissions = {};
    }
    /**
     * @param {?} permissions
     * @return {?}
     */
    NgCanService.prototype.loadPermissions = /**
     * @param {?} permissions
     * @return {?}
     */
    function (permissions) {
        this._permissions = permissions;
    };
    /**
     * @param {?} conditions
     * @param {?=} strict
     * @return {?}
     */
    NgCanService.prototype.checkConditions = /**
     * @param {?} conditions
     * @param {?=} strict
     * @return {?}
     */
    function (conditions, strict) {
        /** @type {?} */
        var allowed = true;
        for (var key in conditions) {
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
    };
    NgCanService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgCanService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgCanService.ngInjectableDef = defineInjectable({ factory: function NgCanService_Factory() { return new NgCanService(); }, token: NgCanService, providedIn: "root" });
    return NgCanService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgCanDirective = /** @class */ (function () {
    function NgCanDirective(el, ngCanService) {
        this.el = el;
        this.ngCanService = ngCanService;
        this.conditions = {};
        this.permissions = {};
        this.hideElement();
    }
    /**
     * @return {?}
     */
    NgCanDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngCanService.loadPermissions(this.permissions);
        /** @type {?} */
        var needToShow = this.ngCanService.checkConditions(this.conditions, this.strictMode);
        if (needToShow) {
            this.showElement();
        }
    };
    /**
     * @return {?}
     */
    NgCanDirective.prototype.hideElement = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.style.visibility = 'hidden';
    };
    /**
     * @return {?}
     */
    NgCanDirective.prototype.showElement = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.style.visibility = 'visible';
    };
    NgCanDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ng-can]'
                },] }
    ];
    /** @nocollapse */
    NgCanDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgCanService }
    ]; };
    NgCanDirective.propDecorators = {
        conditions: [{ type: Input }],
        permissions: [{ type: Input }],
        strictMode: [{ type: Input }]
    };
    return NgCanDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgCanModule = /** @class */ (function () {
    function NgCanModule() {
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
    return NgCanModule;
}());

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