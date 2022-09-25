import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormHorizontalWithIconComponent } from './ui-lib/form-horizontal-with-icon/form-horizontal-with-icon.component';
import { FormHorizontalComponent } from './ui-lib/form-horizontal/form-horizontal.component';
import { FormVerticalComponent } from './ui-lib/form-vertical/form-vertical.component';
import { FormVerticalWithIconComponent } from './ui-lib/form-vertical-with-icon/form-vertical-with-icon.component';
import { SignupComponent } from './ui-lib/signup/signup.component';
import { SignupWithImgComponent } from './ui-lib/signup-with-img/signup-with-img.component';
import { SigninWithImgComponent } from './ui-lib/signin-with-img/signin-with-img.component';
import { LoginComponent } from './ui-lib/login/login.component';
import { ContactUsFormComponent } from './ui-lib/contact-us-form/contact-us-form.component';
import { SidebarGreyComponent } from './ui-lib/sidebar-grey/sidebar-grey.component';

@NgModule({
  declarations: [
    AppComponent,
    FormHorizontalWithIconComponent,
    FormHorizontalComponent,
    FormVerticalComponent,
    FormVerticalWithIconComponent,
    SignupComponent,
    SignupWithImgComponent,
    SigninWithImgComponent,
    LoginComponent,
    ContactUsFormComponent,
    SidebarGreyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
