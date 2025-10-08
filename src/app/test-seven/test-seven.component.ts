import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-seven',
  templateUrl: './test-seven.component.html',
  styleUrls: ['./test-seven.component.scss']
})
export class TestSevenComponent implements OnInit {


  emailForm: FormGroup | any;
  submitted: boolean = false;
  checkEmail: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
   }
  listEmails = [
  "aarav.sharma@gmail.com",
  "priya.singh@yahoo.com",
  "rohit.patel@outlook.com",
  "neha.gupta@gmail.com",
  "ananya.reddy@gmail.com",
  "karan.kapoor@yahoo.com",
  "sanya.mehta@outlook.com",
  "vikram.iyer@gmail.com",
  "deepa.nair@hotmail.com",
  "rahul.joshi@gmail.com"
];
  initForm() {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  get f() { return this.emailForm.controls; }

  onSubmit() {
    this.submitted = true;
    var getEmail = this.emailForm.value.email;
    this.checkEmail = this.listEmails.includes(getEmail);
    if (this.checkEmail) {
      console.log("Email exists in the list.");
    } else {
      console.log("Email does not exist in the list.");
    }
    console.log(this.emailForm.value);
  }
}
