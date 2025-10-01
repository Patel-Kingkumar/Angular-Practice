import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpComponent } from './crud/add-edit-emp/add-edit-emp.component';
import { DispEmpComponent } from './crud/disp-emp/disp-emp.component';

const routes: Routes = [
  { path: 'add-student', component: AddEditEmpComponent },
  { path: 'edit-student/:id', component: AddEditEmpComponent },
  { path: 'display-student', component: DispEmpComponent },
  { path: '', redirectTo: '/add-student', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
