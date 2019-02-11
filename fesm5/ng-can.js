import { Injectable, InjectionToken, NgModule, Directive, ElementRef, Inject, Input, defineInjectable } from '@angular/core';

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
    /**
     * @param {?} el
     * @param {?} hideApproach
     * @return {?}
     */
    NgCanService.prototype.hideElement = /**
     * @param {?} el
     * @param {?} hideApproach
     * @return {?}
     */
    function (el, hideApproach) {
        switch (hideApproach) {
            case 'visibility': {
                el.nativeElement.style.visibility = 'hidden';
                break;
            }
            case 'hidden': {
                el.nativeElement.hidden = true;
                break;
            }
            default:
                throw new Error("Unknown Hide Approach " + hideApproach);
        }
    };
    /**
     * @param {?} el
     * @param {?} hideApproach
     * @return {?}
     */
    NgCanService.prototype.showElement = /**
     * @param {?} el
     * @param {?} hideApproach
     * @return {?}
     */
    function (el, hideApproach) {
        switch (hideApproach) {
            case 'visibility': {
                el.nativeElement.style.visibility = 'visible';
                break;
            }
            case 'hidden': {
                el.nativeElement.hidden = false;
                break;
            }
            default:
                throw new Error("Unknown Hide Approach " + hideApproach);
        }
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
/** @type {?} */
var MODULE_OPTIONS = new InjectionToken('module.options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgCanDirective = /** @class */ (function () {
    function NgCanDirective(el, ngCanService, options) {
        this.el = el;
        this.ngCanService = ngCanService;
        this.options = options;
        this.conditions = {};
        this.permissions = {};
        this.hideApproach = this.options.hide_approach;
    }
    /**
     * @return {?}
     */
    NgCanDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hideElement();
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
        this.ngCanService.hideElement(this.el, this.hideApproach);
    };
    /**
     * @return {?}
     */
    NgCanDirective.prototype.showElement = /**
     * @return {?}
     */
    function () {
        this.ngCanService.showElement(this.el, this.hideApproach);
    };
    NgCanDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ng-can]'
                },] }
    ];
    /** @nocollapse */
    NgCanDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgCanService },
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_OPTIONS,] }] }
    ]; };
    NgCanDirective.propDecorators = {
        conditions: [{ type: Input }],
        permissions: [{ type: Input }],
        strictMode: [{ type: Input }],
        hideApproach: [{ type: Input }]
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
    /**
     * @param {?} options
     * @return {?}
     */
    NgCanModule.forChild = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: NgCanModule,
            providers: [
                {
                    provide: MODULE_OPTIONS,
                    useValue: options
                }
            ]
        };
    };
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

export { NgCanService, NgCanModule, NgCanDirective, MODULE_OPTIONS as ɵa };

//# sourceMappingURL=ng-can.js.map