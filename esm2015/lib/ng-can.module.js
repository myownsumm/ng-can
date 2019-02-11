/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgCanDirective } from './directives/can.directive';
import { MODULE_OPTIONS } from './module.options';
export class NgCanModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNhbi8iLCJzb3VyY2VzIjpbImxpYi9uZy1jYW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBV2xELE1BQU0sT0FBTyxXQUFXOzs7OztJQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQXVCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFO29CQUNQLGNBQWM7aUJBQ2Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NhbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jYW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IElNb2R1bGVPcHRpb25zIH0gZnJvbSAnLi9uZy1jYW4udHlwaW5ncyc7XG5pbXBvcnQgeyBNT0RVTEVfT1BUSU9OUyB9IGZyb20gJy4vbW9kdWxlLm9wdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ0NhbkRpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIE5nQ2FuRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdDYW5Nb2R1bGUge1xuICBzdGF0aWMgZm9yQ2hpbGQob3B0aW9uczogSU1vZHVsZU9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2FuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNT0RVTEVfT1BUSU9OUyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19