import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-single-practice',
  templateUrl: './nested-single-practice.component.html',
  styleUrls: ['./nested-single-practice.component.scss'],
})
export class NestedSinglePracticeComponent implements OnInit {
  employee: FormGroup | any;
  address: FormArray | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.employee = this.fb.group({
      name: [''],
      address: new FormArray([]),
    });
  }

  addEmployees() {
    this.address = this.employee.get('address') as FormArray;
    this.address.push(
      this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      })
    );
  }

  createAddresss() {
    return this.fb.group({ 
street: [''],
        city: [''],
        state: [''],
        zip: [''],
     })
  }
  addAddress() {
    this.address = this.employee.get('address') as FormArray;
    this.address.push(this.createAddresss());
  }

  removeAddress(index: number) {
    this.address = this.employee.get('address') as FormArray;
    this.address.removeAt(index);
  }
}
