import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-two',
  templateUrl: './reactive-two.component.html',
  styleUrls: ['./reactive-two.component.scss']
})
export class ReactiveTwoComponent implements OnInit {

//   2. Nested FormGroup for Registration

// Build a registration form with two grouped sections:

// Personal Details (name, gender, DOB)

// Account Details (username, password, confirm password)
// Constraints:

// Password must match confirm password using a custom validator.

// Disable form submit unless all groups are valid.


  registrationForm: FormGroup | any;
  isPasswordMatch: boolean = true;
  isSubmit: boolean = false;

  constructor() { }

  ngOnInit(): void { 
    this.initRegForm();
  }

  initRegForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      account: new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      })
    })
  }

  submitRegForm() {
    var password = this.registrationForm.get('account.password').value;
    var confirmPassword = this.registrationForm.get('account.confirmPassword').value;
    this.isSubmit = true
    if (password != confirmPassword) {
      this.isPasswordMatch = false;
    } else {
      this.isPasswordMatch = true;
    }
    console.log("form  : ", this.registrationForm.value);
  }

}
