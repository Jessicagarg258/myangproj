import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpnamelistComponent } from './empnamelist/empnamelist.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpService } from './emp.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpeditComponent } from './empedit/empedit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BooleanToTextPipe } from './boolean-to-text.pipe';
import { PasswordMaskPipe } from './password-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpnamelistComponent,
    AboutusComponent,
    ContactusComponent,
    EmpaddComponent,
    HomeComponent,
    EmplistComponent,
    EmpeditComponent,
    LoginComponent,
    RegisterComponent,
    BooleanToTextPipe,
    PasswordMaskPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
