import {
  OnInit, OnChanges, Input, ElementRef, ViewChild,
  Component
} from '@angular/core';
import { ChartService } from './chart.service';

const defaultOptions = {
  maintainAspectRatio: false,
  responsive: true
};

@Component({
  selector: 'ngk-chart',
  template: ` <canvas #canvas></canvas> `,
  styles: []
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() type = 'bar';
  @Input() data: any;
  @Input() options: any;
  @ViewChild('canvas', { read: ElementRef }) canvas: ElementRef;
  chart: any;
  constructor(private lib: ChartService) { }

  private get params() {
    return {
      type: this.type,
      data: this.data,
      options: this.options
    };
  }

  ngOnInit() {
    this.chart = this.lib.create(
      this.canvas.nativeElement,
      this.params);
  }

  ngOnChanges(e) {
    this.update();
  }

  private update() {
    const { chart: c, data = {}, options = {} } = this;
    if (!c) { return; }
    c.data = data;
    c.options = { ...defaultOptions, ...options };
    c.update();
  }
}
