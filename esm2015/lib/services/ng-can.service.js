/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgCanService {
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
     * @param {?} strict
     * @return {?}
     */
    checkConditions(conditions, strict) {
        /** @type {?} */
        let show = true;
        for (const key in conditions) {
            if ((strict && this._permissions[key] === undefined) || this._permissions[key] === conditions[key]) {
                show = false;
                break;
            }
        }
        return show;
    }
}
NgCanService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgCanService.ctorParameters = () => [];
/** @nocollapse */ NgCanService.ngInjectableDef = i0.defineInjectable({ factory: function NgCanService_Factory() { return new NgCanService(); }, token: NgCanService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgCanService.prototype._permissions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jYW4vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbmctY2FuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxZQUFZO0lBR3ZCO1FBRlEsaUJBQVksR0FBc0IsRUFBRSxDQUFDO0lBRzdDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQXVDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxVQUE2QixFQUFFLE1BQWU7O1lBQ3hELElBQUksR0FBRyxJQUFJO1FBRWYsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUViLE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUF6QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsb0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU5nQ2FuUGVybWlzc2lvbnMsIElOZ0NhblBlcm1pc3Npb25zQ2hlY2thYmxlIH0gZnJvbSAnLi4vbmctY2FuLnR5cGluZ3MnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ0NhblNlcnZpY2UgaW1wbGVtZW50cyBJTmdDYW5QZXJtaXNzaW9uc0NoZWNrYWJsZSB7XG4gIHByaXZhdGUgX3Blcm1pc3Npb25zOiBJTmdDYW5QZXJtaXNzaW9ucyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbG9hZFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG4gIH1cblxuICBjaGVja0NvbmRpdGlvbnMoY29uZGl0aW9uczogSU5nQ2FuUGVybWlzc2lvbnMsIHN0cmljdDogYm9vbGVhbikge1xuICAgIGxldCBzaG93ID0gdHJ1ZTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbmRpdGlvbnMpIHtcbiAgICAgIGlmICgoc3RyaWN0ICYmIHRoaXMuX3Blcm1pc3Npb25zW2tleV0gPT09IHVuZGVmaW5lZCkgfHwgdGhpcy5fcGVybWlzc2lvbnNba2V5XSA9PT0gY29uZGl0aW9uc1trZXldKSB7XG4gICAgICAgIHNob3cgPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2hvdztcbiAgfVxufVxuIl19