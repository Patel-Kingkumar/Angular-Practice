import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactive-form/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrComponent } from './reactive-form/form-arr/form-arr.component';
import { ParentComponent } from './data-communication/parent/parent.component';
import { ChildComponent } from './data-communication/child/child.component';
import { AddEditEmpComponent } from './crud/add-edit-emp/add-edit-emp.component';
import { DispEmpComponent } from './crud/disp-emp/disp-emp.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    FormArrComponent,
    ParentComponent,
    ChildComponent,
    AddEditEmpComponent,
    DispEmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
