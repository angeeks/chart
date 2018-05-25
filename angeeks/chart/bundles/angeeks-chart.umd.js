(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angeeks/chart', ['exports', '@angular/core'], factory) :
    (factory((global.angeeks = global.angeeks || {}, global.angeeks.chart = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChartService = (function () {
        function ChartService() {
        }
        ChartService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ChartService.ctorParameters = function () { return []; };
        /** @nocollapse */ ChartService.ngInjectableDef = i0.defineInjectable({ factory: function ChartService_Factory() { return new ChartService(); }, token: ChartService, providedIn: "root" });
        return ChartService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChartComponent = (function () {
        function ChartComponent() {
        }
        /**
         * @return {?}
         */
        ChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngk-chart',
                        template: "\n    <p>\n      chart works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        ChartComponent.ctorParameters = function () { return []; };
        return ChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChartModule = (function () {
        function ChartModule() {
        }
        ChartModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [ChartComponent],
                        exports: [ChartComponent]
                    },] },
        ];
        return ChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ChartService = ChartService;
    exports.ChartComponent = ChartComponent;
    exports.ChartModule = ChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5nZWVrcy1jaGFydC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbmdlZWtzL2NoYXJ0L2xpYi9jaGFydC5zZXJ2aWNlLnRzIiwibmc6Ly9AYW5nZWVrcy9jaGFydC9saWIvY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9AYW5nZWVrcy9jaGFydC9saWIvY2hhcnQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdrLWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNoYXJ0IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hhcnRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hhcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7MkJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsNkNBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7NkJBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO3FCQUMxQjs7MEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=