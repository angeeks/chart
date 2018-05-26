import { Component } from '@angular/core';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngk';
  code = '<ngk-chart type="bar" [data]="data"></ngk-chart>';
  data = {
    labels: ['aa', 'bb', 'cc'],
    datasets: [{
      data: [1, 2, 3]
    }]
  };
}
