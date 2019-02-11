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
/** @nocollapse */ NgCanService.ngInjectableDef = i0.defineInjectable({ factory: function NgCanService_Factory() { return new NgCanService(); }, token: NgCanService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgCanService.prototype._permissions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jYW4vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbmctY2FuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBV3ZELE1BQU0sT0FBTyxZQUFZO0lBR3ZCO1FBRlEsaUJBQVksR0FBc0IsRUFBRSxDQUFDO0lBRzdDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQXVDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxVQUE2QixFQUFFLE1BQWdCOztZQUN6RCxPQUFPLEdBQUcsSUFBSTtRQUVsQixLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkMsU0FBUzthQUNWO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDWCxTQUFTO2lCQUNWO2dCQUVELE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLE1BQU07YUFDUDtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzlDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBRWhCLE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEVBQWMsRUFBRSxZQUEyQjtRQUNyRCxRQUFRLFlBQVksRUFBRTtZQUNwQixLQUFLLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2dCQUU3QyxNQUFNO2FBQ1A7WUFFRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNiLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFFL0IsTUFBTTthQUNQO1lBRUQ7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxFQUFjLEVBQUUsWUFBMkI7UUFDckQsUUFBUSxZQUFZLEVBQUU7WUFDcEIsS0FBSyxZQUFZLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztnQkFFOUMsTUFBTTthQUNQO1lBRUQsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBRWhDLE1BQU07YUFDUDtZQUVEO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsb0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSU5nQ2FuUGVybWlzc2lvbnMsXG4gIElOZ0NhblBlcm1pc3Npb25zQ2hlY2thYmxlLFxuICBJTmdDYW5IaWRlQXBwcm9hY2hlc0NvbnRyb2xsYWJsZSxcbiAgVEhpZGVBcHByb2FjaFxufSBmcm9tICcuLi9uZy1jYW4udHlwaW5ncyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2FuU2VydmljZSBpbXBsZW1lbnRzIElOZ0NhblBlcm1pc3Npb25zQ2hlY2thYmxlLCBJTmdDYW5IaWRlQXBwcm9hY2hlc0NvbnRyb2xsYWJsZSB7XG4gIHByaXZhdGUgX3Blcm1pc3Npb25zOiBJTmdDYW5QZXJtaXNzaW9ucyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbG9hZFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG4gIH1cblxuICBjaGVja0NvbmRpdGlvbnMoY29uZGl0aW9uczogSU5nQ2FuUGVybWlzc2lvbnMsIHN0cmljdD86IGJvb2xlYW4pIHtcbiAgICBsZXQgYWxsb3dlZCA9IHRydWU7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25kaXRpb25zKSB7XG4gICAgICBpZiAoIWNvbmRpdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxsb3dlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zW2tleV0gIT09IGNvbmRpdGlvbnNba2V5XSkge1xuICAgICAgICBhbGxvd2VkID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbG93ZWQ7XG4gIH1cblxuICBoaWRlRWxlbWVudChlbDogRWxlbWVudFJlZiwgaGlkZUFwcHJvYWNoOiBUSGlkZUFwcHJvYWNoKTogdm9pZCB7XG4gICAgc3dpdGNoIChoaWRlQXBwcm9hY2gpIHtcbiAgICAgIGNhc2UgJ3Zpc2liaWxpdHknOiB7XG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdoaWRkZW4nOiB7XG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuaGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIEhpZGUgQXBwcm9hY2ggJHtoaWRlQXBwcm9hY2h9YCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0VsZW1lbnQoZWw6IEVsZW1lbnRSZWYsIGhpZGVBcHByb2FjaDogVEhpZGVBcHByb2FjaCk6IHZvaWQge1xuICAgIHN3aXRjaCAoaGlkZUFwcHJvYWNoKSB7XG4gICAgICBjYXNlICd2aXNpYmlsaXR5Jzoge1xuICAgICAgICBlbC5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2hpZGRlbic6IHtcbiAgICAgICAgZWwubmF0aXZlRWxlbWVudC5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIEhpZGUgQXBwcm9hY2ggJHtoaWRlQXBwcm9hY2h9YCk7XG4gICAgfVxuICB9XG59XG4iXX0=