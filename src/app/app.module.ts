import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicComponent } from './clinic/clinic.component';
import { CustomerComponent } from './customer/customer.component';
import { PetComponent } from './pet/pet.component';
import { HealthComponent } from './health/health.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ReportComponent } from './report/report.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShareService } from './ShareService';

const appRoutes:Routes = [ 
{
  path: '',
  component: DashboardComponent
},
{
  path: 'clinic',
  component: ClinicComponent
},
{
  path: 'customer',
  component: CustomerComponent
},
{
  path: 'pet',
  component: PetComponent
},
{
  path: 'health',
  component: HealthComponent
},
{
  path: 'medicine',
  component: MedicineComponent
},
{
  path: 'report',
  component: ReportComponent
},
]

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    DashboardComponent,
    ClinicComponent,
    CustomerComponent,
    PetComponent,
    HealthComponent,
    MedicineComponent,
    ReportComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
