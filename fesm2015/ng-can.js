import { Injectable, InjectionToken, NgModule, Directive, ElementRef, Inject, Input, defineInjectable } from '@angular/core';

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
    /**
     * @param {?} el
     * @param {?} hideApproach
     * @return {?}
     */
    hideElement(el, hideApproach) {
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
                throw new Error(`Unknown Hide Approach ${hideApproach}`);
        }
    }
    /**
     * @param {?} el
     * @param {?} hideApproach
     * @return {?}
     */
    showElement(el, hideApproach) {
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
                throw new Error(`Unknown Hide Approach ${hideApproach}`);
        }
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
/** @type {?} */
const MODULE_OPTIONS = new InjectionToken('module.options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCanDirective {
    /**
     * @param {?} el
     * @param {?} ngCanService
     * @param {?} options
     */
    constructor(el, ngCanService, options) {
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
    ngOnInit() {
        this.hideElement();
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
        this.ngCanService.hideElement(this.el, this.hideApproach);
    }
    /**
     * @return {?}
     */
    showElement() {
        this.ngCanService.showElement(this.el, this.hideApproach);
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
    { type: NgCanService },
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_OPTIONS,] }] }
];
NgCanDirective.propDecorators = {
    conditions: [{ type: Input }],
    permissions: [{ type: Input }],
    strictMode: [{ type: Input }],
    hideApproach: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCanModule {
    /**
     * @param {?} options
     * @return {?}
     */
    static forChild(options) {
        return {
            ngModule: NgCanModule,
            providers: [
                {
                    provide: MODULE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
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

export { NgCanService, NgCanModule, NgCanDirective, MODULE_OPTIONS as ɵa };

//# sourceMappingURL=ng-can.js.map