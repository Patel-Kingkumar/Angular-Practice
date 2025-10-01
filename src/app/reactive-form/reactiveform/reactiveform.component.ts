import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  studentForm: FormGroup | any;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.initForm();
   }

  ngOnInit(): void { }

  get firstName() {
    return this.studentForm.get('fullName');
  }
  
  initForm() { 
    this.studentForm = this.fb.group({
      fullName: ['', [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),]],
      class: [''],
      rollNo: [''],
      address: [''],
      email: ['', [Validators.email]],
      password: [''],
      confirmPassword: ['']
    });
  }

    get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  
  submitForm() {
    this.submitted = true;
    console.log("validation  : ", this.studentForm.valid);
    console.log("studentForm  : ", this.studentForm.value);
  }
}
