import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { LumbsumCalculatorComponent } from './lumbsum-calculator/lumbsum-calculator.component';
import { HybridCalculatorComponent } from './hybrid-calculator/hybrid-calculator.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SipCalculatorComponent,
    LumbsumCalculatorComponent,
    HybridCalculatorComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[DashboardComponent,
    SipCalculatorComponent,
    LumbsumCalculatorComponent,
    HybridCalculatorComponent,
  UserDetailComponent]
})
export class DashboardModule { }
