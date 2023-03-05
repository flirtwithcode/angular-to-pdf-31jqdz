import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-header></app-header>
    <div class="example-config">
      <button kendo-button  (click)="pdf.saveAs('sampleSentiMent.pdf')">
      <span class="k-icon k-i-print"></span> Print
      </button>
    </div>
  <div style="margin-top:40px"></div>
    <kendo-pdf-export #pdf  margin="2cm">
    
    <chart1></chart1>
    <chart2></chart2>
    <div class="row">
    <div class="col-md-4">
     <app-grid></app-grid>
    </div>
    <div class="col-md-8">
     <opportunities></opportunities>
     </div>
    </div>
    </kendo-pdf-export>
  `,
  styles: [
    `
    kendo-pdf-export {
      font-family: "DejaVu Sans", "Arial", sans-serif;
      font-size: 12px;
    }

    .header-container-newui {
      display: inline-flex;
      justify-content: left;
      align-items: center;
      width: 100%;
      height: 51px;
      margin: 0 auto;
      position: fixed;
      left: 0px
    }
  `,
  ],
})
export class AppComponent {}
