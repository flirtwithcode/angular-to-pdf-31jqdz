import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'chart2',
  //template: `<h1>Hello {{name}}!</h1>`,
  templateUrl: './chart2.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class Chart2Component {
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
      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        // Tooltip Element
        const toolTips = [
          '',
          `<div style='height:60px;width: 120px;background-color: #00BFFF;color: #000;padding: 10px;'>If needed, client <br/>enrolls in Bill Pay and <br/> accepts terms and </br> conditions</div><br/><div style=' height:30px;width: 120px;background-color: #00BFFF;color: #000;padding: 10px;'><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -18%;">1</span>Client selects Bill <br/>Pay Page</div>`,

          `<div style=' height:60px;width: 150px;background-color: #f0ad4e;color: #000;padding: 10px;'><span style="background: #4f86f7;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -13%;">7</span>Recurring Payment - <br/>Client enters <br/> <span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -13%;">2</span>payment information <br/>and submits</div>
          <br/>
          <div style=' height:40px;width: 160px;background-color: #f0ad4e;color: #000;padding: 10px;'>Client searches and <br>	selects biller name</div> <br/>
          
          <div style=' height:60px;width: 160px;background-color: #f0ad4e;color: #000;padding: 10px;'><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">3.9</span>Client requests eBill for <br>next bill and selects <br>	auto pay option for <br>future payments</div><br>
          
          <div style=' height:45px;width: 160px;background-color: #f0ad4e;color: #000;padding: 10px;'><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">2</span>Client enters valid <br> 	account number for <span style="background: #4f86f7;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 7% 0% 0% -64%;">1</span><br/> selected biller</div>`,

          `<div style=' height:30px;width: 165px;background-color: #FF69b4;color: #000;padding: 10px;'><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">11</span>Client calls contact <br>	center to stop payment</div><br/>
          <div style=' height:60px;width: 165px;background-color: #FF69b4;color: #000;padding: 10px;'><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 4% 0% 0% -12%;">12</span>Client calls contact <br/>center after notification <br>that payment was <br>unsuccessful</div>`,

          `<div style=' height:40px;width: 145px;background-color: #FFDBE9;color: #000;padding: 10px;'><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 1% 0% 0% -12%;">8</span>Client views account <br>		activity to confirm <br><span style="background: green;border-radius: 30px;color: #fff;content: attr(badge);font-size: 11px;min-width: 20px;padding: 2px;position: absolute;text-align: center;margin: 2% 0% 0% -10%;">4</span>payment was made</div>`,
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

          titleLines.forEach(function (title) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
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
