import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-one',
  templateUrl: './reactive-one.component.html',
  styleUrls: ['./reactive-one.component.scss'],
})
export class ReactiveOneComponent implements OnInit {
  studentForm: FormGroup | any;
  phone: FormArray | any;

//   1. Dynamic Reactive Form for User Profile

// Create a reactive form with fields: name, email, age, and address.
// Requirements:

// Add a FormArray for multiple phone numbers.

// User can add/remove phone number fields dynamically.

// Validate email format and age range (18–60).

// Highlight invalid fields with error messages.

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initStudentForm();
  }

  initStudentForm() {
    this.studentForm = this.fb.group({
      name: [''],
      email: ['', [Validators.email]],
      age: ['', [Validators.max(60), Validators.min(18)]],
      address: [''],
      phone: new FormArray([]),
    });
  }

  createPhone(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }

  addPhone(): void {
  this.phone = this.studentForm.get('phone') as FormArray;
  this.phone.push(this.createPhone());
}

  get f() {
    return this.studentForm.controls;
  }

  submitForm() {
    console.log('form  : ', this.studentForm.value);
  }
}
