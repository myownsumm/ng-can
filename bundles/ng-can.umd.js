(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-can', ['exports', '@angular/core'], factory) :
    (factory((global['ng-can'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgCanService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgCanService.ngInjectableDef = i0.defineInjectable({ factory: function NgCanService_Factory() { return new NgCanService(); }, token: NgCanService, providedIn: "root" });
        return NgCanService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULE_OPTIONS = new i0.InjectionToken('module.options');

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
            { type: i0.Directive, args: [{
                        selector: '[ng-can]'
                    },] }
        ];
        /** @nocollapse */
        NgCanDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: NgCanService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_OPTIONS,] }] }
            ];
        };
        NgCanDirective.propDecorators = {
            conditions: [{ type: i0.Input }],
            permissions: [{ type: i0.Input }],
            strictMode: [{ type: i0.Input }],
            hideApproach: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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

    exports.NgCanService = NgCanService;
    exports.NgCanModule = NgCanModule;
    exports.NgCanDirective = NgCanDirective;
    exports.ɵa = MODULE_OPTIONS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-can.umd.js.map