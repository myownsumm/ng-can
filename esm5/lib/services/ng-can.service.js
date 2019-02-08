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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jYW4vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbmctY2FuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDO0lBTUU7UUFGUSxpQkFBWSxHQUFzQixFQUFFLENBQUM7SUFHN0MsQ0FBQzs7Ozs7SUFFRCxzQ0FBZTs7OztJQUFmLFVBQWdCLFdBQXVDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELHNDQUFlOzs7OztJQUFmLFVBQWdCLFVBQTZCLEVBQUUsTUFBZ0I7O1lBQ3pELE9BQU8sR0FBRyxJQUFJO1FBRWxCLEtBQUssSUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxTQUFTO2FBQ1Y7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNYLFNBQVM7aUJBQ1Y7Z0JBRUQsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDaEIsTUFBTTthQUNQO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFFaEIsTUFBTTthQUNQO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkF0Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUJBTEQ7Q0EwQ0MsQUF2Q0QsSUF1Q0M7U0FwQ1ksWUFBWTs7Ozs7O0lBQ3ZCLG9DQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElOZ0NhblBlcm1pc3Npb25zLCBJTmdDYW5QZXJtaXNzaW9uc0NoZWNrYWJsZSB9IGZyb20gJy4uL25nLWNhbi50eXBpbmdzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdDYW5TZXJ2aWNlIGltcGxlbWVudHMgSU5nQ2FuUGVybWlzc2lvbnNDaGVja2FibGUge1xuICBwcml2YXRlIF9wZXJtaXNzaW9uczogSU5nQ2FuUGVybWlzc2lvbnMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGxvYWRQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICB9XG5cbiAgY2hlY2tDb25kaXRpb25zKGNvbmRpdGlvbnM6IElOZ0NhblBlcm1pc3Npb25zLCBzdHJpY3Q/OiBib29sZWFuKSB7XG4gICAgbGV0IGFsbG93ZWQgPSB0cnVlO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZGl0aW9ucykge1xuICAgICAgaWYgKCFjb25kaXRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbG93ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1trZXldICE9PSBjb25kaXRpb25zW2tleV0pIHtcbiAgICAgICAgYWxsb3dlZCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhbGxvd2VkO1xuICB9XG59XG4iXX0=