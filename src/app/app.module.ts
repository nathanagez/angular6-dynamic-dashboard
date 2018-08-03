// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { ChartsModule } from 'ng2-charts';

// CSS FRAMEWORK ICONS 
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';

// CONST
import { ROUTES } from './app.routes';

// COMPONENTS
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    HttpClientModule,
    ChartsModule,
    DynamicModule.withComponents([DoughnutChartComponent, RadarChartComponent, LineChartComponent]),
    RouterModule.forRoot(ROUTES),
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
