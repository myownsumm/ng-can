/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { NgCanService } from '../services/ng-can.service';
import { MODULE_OPTIONS } from '../module.options';
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
export { NgCanDirective };
if (false) {
    /** @type {?} */
    NgCanDirective.prototype.conditions;
    /** @type {?} */
    NgCanDirective.prototype.permissions;
    /** @type {?} */
    NgCanDirective.prototype.strictMode;
    /** @type {?} */
    NgCanDirective.prototype.hideApproach;
    /**
     * @type {?}
     * @protected
     */
    NgCanDirective.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    NgCanDirective.prototype.ngCanService;
    /**
     * @type {?}
     * @protected
     */
    NgCanDirective.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNhbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Nhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQVNFLHdCQUFzQixFQUFjLEVBQVksWUFBMEIsRUFDNUIsT0FBdUI7UUFEL0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBTjVELGVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUVwQyxpQkFBWSxHQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUlsRSxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7WUFDOUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV0RixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBUG1CLFVBQVU7Z0JBQ3JCLFlBQVk7Z0RBY04sTUFBTSxTQUFDLGNBQWM7Ozs2QkFOakMsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs7SUF3QlIscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTVCWSxjQUFjOzs7SUFDekIsb0NBQTRDOztJQUM1QyxxQ0FBNkM7O0lBQzdDLG9DQUE2Qjs7SUFDN0Isc0NBQWtFOzs7OztJQUV0RCw0QkFBd0I7Ozs7O0lBQUUsc0NBQW9DOzs7OztJQUM5RCxpQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDYW5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmctY2FuLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU1vZHVsZU9wdGlvbnMsIElOZ0NhblBlcm1pc3Npb25zLCBUSGlkZUFwcHJvYWNoIH0gZnJvbSAnLi4vbmctY2FuLnR5cGluZ3MnO1xuaW1wb3J0IHsgTU9EVUxFX09QVElPTlMgfSBmcm9tICcuLi9tb2R1bGUub3B0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZy1jYW5dJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ0NhbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmRpdGlvbnM6IElOZ0NhblBlcm1pc3Npb25zID0ge307XG4gIEBJbnB1dCgpIHBlcm1pc3Npb25zOiBJTmdDYW5QZXJtaXNzaW9ucyA9IHt9O1xuICBASW5wdXQoKSBzdHJpY3RNb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWRlQXBwcm9hY2g6IFRIaWRlQXBwcm9hY2ggPSB0aGlzLm9wdGlvbnMuaGlkZV9hcHByb2FjaDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBuZ0NhblNlcnZpY2U6IE5nQ2FuU2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChNT0RVTEVfT1BUSU9OUykgcHJvdGVjdGVkIG9wdGlvbnM6IElNb2R1bGVPcHRpb25zKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVFbGVtZW50KCk7XG5cbiAgICB0aGlzLm5nQ2FuU2VydmljZS5sb2FkUGVybWlzc2lvbnModGhpcy5wZXJtaXNzaW9ucyk7XG4gICAgY29uc3QgbmVlZFRvU2hvdyA9IHRoaXMubmdDYW5TZXJ2aWNlLmNoZWNrQ29uZGl0aW9ucyh0aGlzLmNvbmRpdGlvbnMsIHRoaXMuc3RyaWN0TW9kZSk7XG5cbiAgICBpZiAobmVlZFRvU2hvdykge1xuICAgICAgdGhpcy5zaG93RWxlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50KCkge1xuICAgIHRoaXMubmdDYW5TZXJ2aWNlLmhpZGVFbGVtZW50KHRoaXMuZWwsIHRoaXMuaGlkZUFwcHJvYWNoKTtcbiAgfVxuXG4gIHNob3dFbGVtZW50KCkge1xuICAgIHRoaXMubmdDYW5TZXJ2aWNlLnNob3dFbGVtZW50KHRoaXMuZWwsIHRoaXMuaGlkZUFwcHJvYWNoKTtcbiAgfVxufVxuIl19