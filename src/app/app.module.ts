import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactive-form/reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrComponent } from './reactive-form/form-arr/form-arr.component';
import { ParentComponent } from './data-communication/parent/parent.component';
import { ChildComponent } from './data-communication/child/child.component';
import { AddEditEmpComponent } from './crud/add-edit-emp/add-edit-emp.component';
import { DispEmpComponent } from './crud/disp-emp/disp-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivemFormComponent } from './template-drivem-form/template-drivem-form.component';
import { RouteComponent } from './route/route.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { TopicsComponent } from './topics/topics.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestThreeOneComponent } from './test-three-one/test-three-one.component';
import { TestThreeTwoComponent } from './test-three-two/test-three-two.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { FirstCapitalLetterPipe } from './first-capital-letter.pipe';
import { TestFourComponent } from './test-four/test-four.component';
import { TestFiveComponent } from './test-five/test-five.component';
import { TestSixComponent } from './test-six/test-six.component';
import { TestSevenComponent } from './test-seven/test-seven.component';
import { MummyPapaComponent } from './data-passing/mummy-papa/mummy-papa.component';
import { ChhokroComponent } from './data-passing/chhokro/chhokro.component';
import { ParentOneComponent } from './communication/parent-one/parent-one.component';
import { ChildOneComponent } from './communication/child-one/child-one.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { SimpleFormarrayComponent } from './simple-formarray/simple-formarray.component';
import { NestedSinglePracticeComponent } from './nested-single-practice/nested-single-practice.component';
import { CalculaterComponent } from './calculater/calculater.component';
import { SwitchComponent } from './switch/switch.component';
import { ReactiveOneComponent } from './reactive-one/reactive-one.component';
import { ReactiveTwoComponent } from './reactive-two/reactive-two.component';
import { AddEditPageComponent } from './nested-formarry-crud/add-edit-page/add-edit-page.component';
import { RxjsOprComponent } from './rxjs-opr/rxjs-opr.component';
import { ParentZeroComponent } from './parent-to-child/parent-zero/parent-zero.component';
import { ChildZeroComponent } from './parent-to-child/child-zero/child-zero.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    FormArrComponent,
    ParentComponent,
    ChildComponent,
    AddEditEmpComponent,
    DispEmpComponent,
    TemplateDrivemFormComponent,
    RouteComponent,
    RouteOneComponent,
    RouteTwoComponent,
    TopicsComponent,
    TestOneComponent,
    TestTwoComponent,
    TestThreeOneComponent,
    TestThreeTwoComponent,
    TestThreeComponent,
    FirstCapitalLetterPipe,
    TestFourComponent,
    TestFiveComponent,
    TestSixComponent,
    TestSevenComponent,
    MummyPapaComponent,
    ChhokroComponent,
    ParentOneComponent,
    ChildOneComponent,
    TicTacToeComponent,
    SimpleFormarrayComponent,
    NestedSinglePracticeComponent,
    CalculaterComponent,
    SwitchComponent,
    ReactiveOneComponent,
    ReactiveTwoComponent,
    AddEditPageComponent,
    RxjsOprComponent,
    ParentZeroComponent,
    ChildZeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
