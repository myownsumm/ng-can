/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgCanDirective } from './directives/can.directive';
import { MODULE_OPTIONS } from './module.options';
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
    return NgCanModule;
}());
export { NgCanModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNhbi8iLCJzb3VyY2VzIjpbImxpYi9uZy1jYW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxEO0lBQUE7SUFxQkEsQ0FBQzs7Ozs7SUFYUSxvQkFBUTs7OztJQUFmLFVBQWdCLE9BQXVCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXBCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7aUJBQ0Y7O0lBYUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQVpZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDYW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2FuLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJTW9kdWxlT3B0aW9ucyB9IGZyb20gJy4vbmctY2FuLnR5cGluZ3MnO1xuaW1wb3J0IHsgTU9EVUxFX09QVElPTlMgfSBmcm9tICcuL21vZHVsZS5vcHRpb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdDYW5EaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ0NhbkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2FuTW9kdWxlIHtcbiAgc3RhdGljIGZvckNoaWxkKG9wdGlvbnM6IElNb2R1bGVPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0Nhbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTU9EVUxFX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==