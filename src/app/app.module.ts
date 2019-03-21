import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockChartModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { DataService } from './data.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockChartModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
