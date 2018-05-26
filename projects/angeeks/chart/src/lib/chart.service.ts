import { Injectable } from '@angular/core';
import { ChartWrapper } from './chart.wrapper';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
    constructor(private chart: ChartWrapper) { }

    create(el, params) {
      return this.chart.create(el, params);
    }
}
