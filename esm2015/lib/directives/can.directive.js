/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { NgCanService } from '../services/ng-can.service';
import { MODULE_OPTIONS } from '../module.options';
export class NgCanDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNhbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Nhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtuRCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBTXpCLFlBQXNCLEVBQWMsRUFBWSxZQUEwQixFQUM1QixPQUF1QjtRQUQvQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVksaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFONUQsZUFBVSxHQUFzQixFQUFFLENBQUM7UUFDbkMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLGlCQUFZLEdBQWtCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBSWxFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Y0FDOUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV0RixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7O1lBUG1CLFVBQVU7WUFDckIsWUFBWTs0Q0FjTixNQUFNLFNBQUMsY0FBYzs7O3lCQU5qQyxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzs7O0lBSE4sb0NBQTRDOztJQUM1QyxxQ0FBNkM7O0lBQzdDLG9DQUE2Qjs7SUFDN0Isc0NBQWtFOzs7OztJQUV0RCw0QkFBd0I7Ozs7O0lBQUUsc0NBQW9DOzs7OztJQUM5RCxpQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDYW5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmctY2FuLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU1vZHVsZU9wdGlvbnMsIElOZ0NhblBlcm1pc3Npb25zLCBUSGlkZUFwcHJvYWNoIH0gZnJvbSAnLi4vbmctY2FuLnR5cGluZ3MnO1xuaW1wb3J0IHsgTU9EVUxFX09QVElPTlMgfSBmcm9tICcuLi9tb2R1bGUub3B0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZy1jYW5dJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ0NhbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmRpdGlvbnM6IElOZ0NhblBlcm1pc3Npb25zID0ge307XG4gIEBJbnB1dCgpIHBlcm1pc3Npb25zOiBJTmdDYW5QZXJtaXNzaW9ucyA9IHt9O1xuICBASW5wdXQoKSBzdHJpY3RNb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWRlQXBwcm9hY2g6IFRIaWRlQXBwcm9hY2ggPSB0aGlzLm9wdGlvbnMuaGlkZV9hcHByb2FjaDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBuZ0NhblNlcnZpY2U6IE5nQ2FuU2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChNT0RVTEVfT1BUSU9OUykgcHJvdGVjdGVkIG9wdGlvbnM6IElNb2R1bGVPcHRpb25zKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVFbGVtZW50KCk7XG5cbiAgICB0aGlzLm5nQ2FuU2VydmljZS5sb2FkUGVybWlzc2lvbnModGhpcy5wZXJtaXNzaW9ucyk7XG4gICAgY29uc3QgbmVlZFRvU2hvdyA9IHRoaXMubmdDYW5TZXJ2aWNlLmNoZWNrQ29uZGl0aW9ucyh0aGlzLmNvbmRpdGlvbnMsIHRoaXMuc3RyaWN0TW9kZSk7XG5cbiAgICBpZiAobmVlZFRvU2hvdykge1xuICAgICAgdGhpcy5zaG93RWxlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50KCkge1xuICAgIHRoaXMubmdDYW5TZXJ2aWNlLmhpZGVFbGVtZW50KHRoaXMuZWwsIHRoaXMuaGlkZUFwcHJvYWNoKTtcbiAgfVxuXG4gIHNob3dFbGVtZW50KCkge1xuICAgIHRoaXMubmdDYW5TZXJ2aWNlLnNob3dFbGVtZW50KHRoaXMuZWwsIHRoaXMuaGlkZUFwcHJvYWNoKTtcbiAgfVxufVxuIl19