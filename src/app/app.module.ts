import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactive-form/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrComponent } from './reactive-form/form-arr/form-arr.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    FormArrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
