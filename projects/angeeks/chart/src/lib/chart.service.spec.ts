import { TestBed, inject } from '@angular/core/testing';

import { ChartWrapper } from './chart.wrapper';
import { ChartService } from './chart.service';

describe('ChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChartWrapper,
        ChartService
      ]
    });
  });

  it('should be created', inject([ChartService], (service: ChartService) => {
    expect(service).toBeTruthy();
  }));
});
