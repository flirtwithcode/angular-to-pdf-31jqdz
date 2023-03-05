import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'chart3',
  //template: `<h1>Hello {{name}}!</h1>`,
  templateUrl: './chart3.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class Chart3Component {
  @ViewChild('myCanvas') canvas: ElementRef;
  public lineChartData: ChartDataSets[] = [
    {
      data: [
        { y: 0 },
        { y: 1.4 },
        { y: 1.8 },
        { y: 2.3 },
        { y: 2.6 },
        { y: 0.8 },
        { y: 0 },
      ],
      label: '',
    },
  ];
  public lineChartLabels: Label[] = [
    '',
    'Enrollment',
    'Request Submission',
    '',
    'Payment Processing',
    'Completion',
    '',
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        // Tooltip Element
        const toolTips = [
          '',
          ``,

          `<div style=' height:80px;width: 150px;background-color: #fce7ce;color: #000;padding: 10px;'>Validate Client - <br/>account information<br/> with eBill eligible <br/>biller</div>
          <br/>`,
          `
          <div style=' height:80px;width: 160px;background-color: #fce7ce;color: #000;padding: 10px;'><span style="background: #4f86f7;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">3</span>Determine if<br>payment is fraud;<br>cancel payment if<br>fraud</div><br>`,

          `<div style=' height:50px;width: 165px;background-color: #ddc4f0;color: #000;padding: 10px;'>Payment made- <br>	Payment file are sent <br> for debit</div><br/>
          <div style=' height:80px;width: 165px;background-color: #ddc4f0;color: #000;padding: 10px;'><span style="background: #4f86f7;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">4</span>Payment files are sent <br/><span style="background: #4f86f7;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">6</span>from FISERV to Bank of <br>America</div>`,

          `<div style=' height:80px;width: 155px;background-color: #f7f1fb;color: #000;padding: 10px;'><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">6</span>Perform General Ledger <br><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">5</span>Reconciliation</div>`,
        ];
        var tooltipEl = document.getElementById('chartjs-tooltip');

        let index = 0;
        // if (tooltipModel.dataPounts) {
        index = tooltipModel.dataPoints[0].index;
        // }
        console.log(index);
        const content = toolTips[index];
        console.log(toolTips[1]);
        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<table></table>';
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = '0';
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);

          var innerHtml = '<thead>';
          var colors = ['#5aa0be', '#f8b364', '#f8b364', '#ae74de', '#a825ec'];
          titleLines.forEach(function (title) {
            innerHtml +=
              '<tr><th style="color:' +
              colors[index - 1] +
              ';">' +
              title +
              '</th></tr>';
          });
          innerHtml += '</thead><tbody>';

          // var colors = tooltipModel.labelColors[i];
          // var style = 'background:' + colors.backgroundColor;
          // style += '; border-color: blue';
          // style += '; border-width: 2px';
          // var span = '<span style="' + style + '"></span>';
          console.log(toolTips[index]);
          innerHtml += '<tr><td>' + toolTips[index] + '</td></tr>';
          innerHtml += '</tbody>';

          var tableRoot = tooltipEl.querySelector('table');
          tableRoot.innerHTML = innerHtml;
          console.log(tableRoot, 'table root');
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = '1';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left =
          position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top =
          position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding =
          tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
      },
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
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
