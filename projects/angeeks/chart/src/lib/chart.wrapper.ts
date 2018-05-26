import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable()
export class ChartWrapper {
    constructor() { }

    create(el, params) {
      return new Chart(el.getContext('2d'), params);
    }
}
