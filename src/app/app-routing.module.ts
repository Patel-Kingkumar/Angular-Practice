import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpComponent } from './crud/add-edit-emp/add-edit-emp.component';
import { DispEmpComponent } from './crud/disp-emp/disp-emp.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { TestThreeOneComponent } from './test-three-one/test-three-one.component';
import { TestThreeTwoComponent } from './test-three-two/test-three-two.component';

const routes: Routes = [
  { path: 'add-student', component: AddEditEmpComponent },
  { path: 'edit-student/:id', component: AddEditEmpComponent },
  { path: 'display-student', component: DispEmpComponent },
  // { path: '', redirectTo: '/add-student', pathMatch: 'full' },
  { path: 'route-one', component: RouteOneComponent },
  { path: 'route-two', component: RouteTwoComponent },
  { path: 'three-one', component: TestThreeOneComponent },
  { path: 'three-two/:id', component: TestThreeTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
