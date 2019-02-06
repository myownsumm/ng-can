/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { NgCanService } from '../services/ng-can.service';
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
export { NgCanDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNhbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Nhbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHMUQ7SUFRRSx3QkFBc0IsRUFBYyxFQUFZLFlBQTBCO1FBQXBELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUpqRSxlQUFVLEdBQXNCLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFzQixFQUFFLENBQUM7UUFJM0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQzlDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdEYsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQU5tQixVQUFVO2dCQUNyQixZQUFZOzs7NkJBT2xCLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQXNCUixxQkFBQztDQUFBLEFBNUJELElBNEJDO1NBekJZLGNBQWM7OztJQUN6QixvQ0FBNEM7O0lBQzVDLHFDQUE2Qzs7SUFDN0Msb0NBQTZCOzs7OztJQUVqQiw0QkFBd0I7Ozs7O0lBQUUsc0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NhblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9uZy1jYW4uc2VydmljZSc7XG5pbXBvcnQgeyBJTmdDYW5QZXJtaXNzaW9ucyB9IGZyb20gJy4uL25nLWNhbi50eXBpbmdzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nLWNhbl0nXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2FuRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZGl0aW9uczogSU5nQ2FuUGVybWlzc2lvbnMgPSB7fTtcbiAgQElucHV0KCkgcGVybWlzc2lvbnM6IElOZ0NhblBlcm1pc3Npb25zID0ge307XG4gIEBJbnB1dCgpIHN0cmljdE1vZGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgbmdDYW5TZXJ2aWNlOiBOZ0NhblNlcnZpY2UpIHtcbiAgICB0aGlzLmhpZGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nQ2FuU2VydmljZS5sb2FkUGVybWlzc2lvbnModGhpcy5wZXJtaXNzaW9ucyk7XG4gICAgY29uc3QgbmVlZFRvU2hvdyA9IHRoaXMubmdDYW5TZXJ2aWNlLmNoZWNrQ29uZGl0aW9ucyh0aGlzLmNvbmRpdGlvbnMsIHRoaXMuc3RyaWN0TW9kZSk7XG5cbiAgICBpZiAobmVlZFRvU2hvdykge1xuICAgICAgdGhpcy5zaG93RWxlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH1cblxuICBzaG93RWxlbWVudCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxufVxuIl19