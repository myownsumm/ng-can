/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { NgCanService } from '../services/ng-can.service';
export class NgCanDirective {
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
if (false) {
    /** @type {?} */
    NgCanDirective.prototype.conditions;
    /** @type {?} */
    NgCanDirective.prototype.permissions;
    /** @type {?} */
    NgCanDirective.prototype.strictMode;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNhbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Nhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNMUQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBS3pCLFlBQXNCLEVBQWMsRUFBWSxZQUEwQjtRQUFwRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVksaUJBQVksR0FBWixZQUFZLENBQWM7UUFKakUsZUFBVSxHQUFzQixFQUFFLENBQUM7UUFDbkMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBSTNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Y0FDOUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV0RixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNyRCxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7O1lBTm1CLFVBQVU7WUFDckIsWUFBWTs7O3lCQU9sQixLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUZOLG9DQUE0Qzs7SUFDNUMscUNBQTZDOztJQUM3QyxvQ0FBNkI7Ozs7O0lBRWpCLDRCQUF3Qjs7Ozs7SUFBRSxzQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2FuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25nLWNhbi5zZXJ2aWNlJztcbmltcG9ydCB7IElOZ0NhblBlcm1pc3Npb25zIH0gZnJvbSAnLi4vbmctY2FuLnR5cGluZ3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmctY2FuXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdDYW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25kaXRpb25zOiBJTmdDYW5QZXJtaXNzaW9ucyA9IHt9O1xuICBASW5wdXQoKSBwZXJtaXNzaW9uczogSU5nQ2FuUGVybWlzc2lvbnMgPSB7fTtcbiAgQElucHV0KCkgc3RyaWN0TW9kZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBuZ0NhblNlcnZpY2U6IE5nQ2FuU2VydmljZSkge1xuICAgIHRoaXMuaGlkZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdDYW5TZXJ2aWNlLmxvYWRQZXJtaXNzaW9ucyh0aGlzLnBlcm1pc3Npb25zKTtcbiAgICBjb25zdCBuZWVkVG9TaG93ID0gdGhpcy5uZ0NhblNlcnZpY2UuY2hlY2tDb25kaXRpb25zKHRoaXMuY29uZGl0aW9ucywgdGhpcy5zdHJpY3RNb2RlKTtcblxuICAgIGlmIChuZWVkVG9TaG93KSB7XG4gICAgICB0aGlzLnNob3dFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxuXG4gIHNob3dFbGVtZW50KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9XG59XG4iXX0=