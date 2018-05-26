import { NgModule, ModuleWithProviders } from '@angular/core';
import { ChartComponent } from './chart.component';
import { ChartWrapper } from './chart.wrapper';

@NgModule({
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChartModule,
      providers: [
        ChartWrapper
      ]
    };
  }
}
