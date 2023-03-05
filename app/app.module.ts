import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { Chart1Component } from './chart1.component';
import { Chart2Component } from './chart2.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { OpportunitiesComponent } from './grid/opportunities.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  imports: [
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PDFExportModule,
    AgGridModule.withComponents([GridComponent]),
  ],
  declarations: [
    AppComponent,
    Chart1Component,
    Chart2Component,
    GridComponent,
    OpportunitiesComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
