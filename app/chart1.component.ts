import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'chart1',
  //template: `<h1>Hello {{name}}!</h1>`,
  templateUrl: './chart1.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class Chart1Component {
  @ViewChild('myCanvas') canvas: ElementRef;
  public lineChartData: ChartDataSets[] = [
    {
      data: [{ y: 0 }, { y: 3 }, { y: 1.8 }, { y: 1.3 }, { y: 2.0 }, { y: 0 }],
      label: '',
    },
  ];
  public lineChartLabels: Label[] = [
    '',
    'Enrollment',
    'Request Submission',
    'Payment Processing',
    'Completion',
    '',
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    tooltips: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      bodyFontColor: '#999',
      borderColor: '#999',
      borderWidth: 1,
      caretPadding: 15,
      colorBody: '#666',
      displayColors: false,
      enabled: true,
      intersect: true,
      mode: 'x',
      titleFontColor: '#999',
      titleMarginBottom: 10,
      xPadding: 15,
      yPadding: 15,
      callbacks: {
        label: function (tooltipItem, data) {
          const datasetLabel =
            data.datasets[tooltipItem.datasetIndex].label || '';
          return tooltipItem.yLabel;
        },
      },
    },
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'grey',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {
    const gradient = this.canvas.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, '#E2F8B5');
    gradient.addColorStop(1, '#FFE9E9');
    this.lineChartColors = [
      {
        backgroundColor: gradient,
      },
    ];
  }
}
