import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmaterialModule } from './AngularMaterial/amaterial/amaterial.module';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { FeesdepositComponent } from './pages/feesdeposit/feesdeposit.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { RecieptdownloadComponent } from './pages/recieptdownload/recieptdownload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmindetailComponent } from './popup/admindetail/admindetail.component';
import { StudentviewComponent } from './popup/studentview/studentview.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    AdmissionComponent,
    FeesdepositComponent,
    StudentlistComponent,
    RecieptdownloadComponent,
    AdmindetailComponent,
    StudentviewComponent
   
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
