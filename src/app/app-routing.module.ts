import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { FeesdepositComponent } from './pages/feesdeposit/feesdeposit.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { RecieptdownloadComponent } from './pages/recieptdownload/recieptdownload.component';
import { AuthGuard } from './auth.guard';
import { AuthGuard2 } from './loginauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthGuard2]
  },
  {
    path: 'SignUp',
    component: SignupComponent,
    canActivate:[AuthGuard2]
  },
  {
    path: 'Forget-Password',
    component: ForgetComponent,
    canActivate:[AuthGuard2]
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'Admission',
    component: AdmissionComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'FeesDeposit',
    component: FeesdepositComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'StudentList',
    component: StudentlistComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'RecieptDownload',
    component: RecieptdownloadComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
