import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormHorizontalWithIconComponent } from './form-horizontal-with-icon/form-horizontal-with-icon.component';
import { FormHorizontalComponent } from './form-horizontal/form-horizontal.component';
import { FormVerticalComponent } from './form-vertical/form-vertical.component';
import { FormVerticalWithIconComponent } from './form-vertical-with-icon/form-vertical-with-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FormHorizontalWithIconComponent,
    FormHorizontalComponent,
    FormVerticalComponent,
    FormVerticalWithIconComponent
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
