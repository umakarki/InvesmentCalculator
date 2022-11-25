import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HybridCalculatorComponent } from './dashboard/hybrid-calculator/hybrid-calculator.component';
import { LumbsumCalculatorComponent } from './dashboard/lumbsum-calculator/lumbsum-calculator.component';
import { SipCalculatorComponent } from './dashboard/sip-calculator/sip-calculator.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDetailComponent } from './dashboard/user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {path:'' ,redirectTo:'signin', pathMatch:'full'},
  {path:"signup",component:SignUpComponent},
  {path:"signin",component:SignInComponent},
  {path:'updateuser/:id', component:UpdateUserComponent},
 
    // {path:"dashboard",component:DashboardComponent},
    // {path:"sip", component:SipCalculatorComponent},
    // {path:"lumbsum", component:LumbsumCalculatorComponent},
    // {path:"hybrid", component:HybridCalculatorComponent},

  {path:"dashboard",component:DashboardComponent,
  children:[
    {path:"sip",component:SipCalculatorComponent},
    {path:"lumbsum",component:LumbsumCalculatorComponent},
    {path:"hybrid", component:HybridCalculatorComponent},
    {path:"userDetail", component:UserDetailComponent},
  
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
