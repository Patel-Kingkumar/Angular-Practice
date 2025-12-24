import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NestedFormArrayService } from '../nested-form-array.service';

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.scss'],
})
export class AddEditPageComponent {
  empForm!: FormGroup;
  routeId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private nestedFormArrayService: NestedFormArrayService
  ) {}

  ngOnInit() {
    this.routeId = this.route.snapshot.params['id'];
    console.log('routeId  : ', this.routeId);

    this.empForm = this.fb.group({
      employees: this.fb.array([]),
    });

    this.getAllEmployees();
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([]),
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.employees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);

    if (this.routeId != null || this.routeId != undefined) {
      this.nestedFormArrayService
        .editemployees(this.routeId, this.empForm.value)
        .subscribe({
          next: (res) => {
            console.log('res  : ', res);
          },
          error: (err) => {},
          complete: () => {
          },
        });
    } else {
      this.nestedFormArrayService.addemployees(this.empForm.value).subscribe({
        next: (res) => {
          console.log('res  : ', res);
        },
        error: (err) => {},
        complete: () => {
        },
      });
    }
    console.log('form  : ', this.empForm.value);
  }

  allEmployees: any = "";
  getAllEmployees() {
    this.nestedFormArrayService.getemployees().subscribe((data) => {
      this.allEmployees = data;
    });
  }
}
