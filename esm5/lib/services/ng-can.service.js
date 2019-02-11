/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ NgCanService.ngInjectableDef = i0.defineInjectable({ factory: function NgCanService_Factory() { return new NgCanService(); }, token: NgCanService, providedIn: "root" });
    return NgCanService;
}());
export { NgCanService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgCanService.prototype._permissions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jYW4vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbmctY2FuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUXZEO0lBTUU7UUFGUSxpQkFBWSxHQUFzQixFQUFFLENBQUM7SUFHN0MsQ0FBQzs7Ozs7SUFFRCxzQ0FBZTs7OztJQUFmLFVBQWdCLFdBQXVDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELHNDQUFlOzs7OztJQUFmLFVBQWdCLFVBQTZCLEVBQUUsTUFBZ0I7O1lBQ3pELE9BQU8sR0FBRyxJQUFJO1FBRWxCLEtBQUssSUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxTQUFTO2FBQ1Y7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNYLFNBQVM7aUJBQ1Y7Z0JBRUQsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDaEIsTUFBTTthQUNQO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFFaEIsTUFBTTthQUNQO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFRCxrQ0FBVzs7Ozs7SUFBWCxVQUFZLEVBQWMsRUFBRSxZQUEyQjtRQUNyRCxRQUFRLFlBQVksRUFBRTtZQUNwQixLQUFLLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2dCQUU3QyxNQUFNO2FBQ1A7WUFFRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNiLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFFL0IsTUFBTTthQUNQO1lBRUQ7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBeUIsWUFBYyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxrQ0FBVzs7Ozs7SUFBWCxVQUFZLEVBQWMsRUFBRSxZQUEyQjtRQUNyRCxRQUFRLFlBQVksRUFBRTtZQUNwQixLQUFLLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO2dCQUU5QyxNQUFNO2FBQ1A7WUFFRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNiLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFFaEMsTUFBTTthQUNQO1lBRUQ7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBeUIsWUFBYyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkE1RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUJBVkQ7Q0FxRkMsQUE3RUQsSUE2RUM7U0ExRVksWUFBWTs7Ozs7O0lBQ3ZCLG9DQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIElOZ0NhblBlcm1pc3Npb25zLFxuICBJTmdDYW5QZXJtaXNzaW9uc0NoZWNrYWJsZSxcbiAgSU5nQ2FuSGlkZUFwcHJvYWNoZXNDb250cm9sbGFibGUsXG4gIFRIaWRlQXBwcm9hY2hcbn0gZnJvbSAnLi4vbmctY2FuLnR5cGluZ3MnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ0NhblNlcnZpY2UgaW1wbGVtZW50cyBJTmdDYW5QZXJtaXNzaW9uc0NoZWNrYWJsZSwgSU5nQ2FuSGlkZUFwcHJvYWNoZXNDb250cm9sbGFibGUge1xuICBwcml2YXRlIF9wZXJtaXNzaW9uczogSU5nQ2FuUGVybWlzc2lvbnMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGxvYWRQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICB9XG5cbiAgY2hlY2tDb25kaXRpb25zKGNvbmRpdGlvbnM6IElOZ0NhblBlcm1pc3Npb25zLCBzdHJpY3Q/OiBib29sZWFuKSB7XG4gICAgbGV0IGFsbG93ZWQgPSB0cnVlO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZGl0aW9ucykge1xuICAgICAgaWYgKCFjb25kaXRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbG93ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1trZXldICE9PSBjb25kaXRpb25zW2tleV0pIHtcbiAgICAgICAgYWxsb3dlZCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhbGxvd2VkO1xuICB9XG5cbiAgaGlkZUVsZW1lbnQoZWw6IEVsZW1lbnRSZWYsIGhpZGVBcHByb2FjaDogVEhpZGVBcHByb2FjaCk6IHZvaWQge1xuICAgIHN3aXRjaCAoaGlkZUFwcHJvYWNoKSB7XG4gICAgICBjYXNlICd2aXNpYmlsaXR5Jzoge1xuICAgICAgICBlbC5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAnaGlkZGVuJzoge1xuICAgICAgICBlbC5uYXRpdmVFbGVtZW50LmhpZGRlbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBIaWRlIEFwcHJvYWNoICR7aGlkZUFwcHJvYWNofWApO1xuICAgIH1cbiAgfVxuXG4gIHNob3dFbGVtZW50KGVsOiBFbGVtZW50UmVmLCBoaWRlQXBwcm9hY2g6IFRIaWRlQXBwcm9hY2gpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGhpZGVBcHByb2FjaCkge1xuICAgICAgY2FzZSAndmlzaWJpbGl0eSc6IHtcbiAgICAgICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdoaWRkZW4nOiB7XG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBIaWRlIEFwcHJvYWNoICR7aGlkZUFwcHJvYWNofWApO1xuICAgIH1cbiAgfVxufVxuIl19