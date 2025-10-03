import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-drivem-form',
  templateUrl: './template-drivem-form.component.html',
  styleUrls: ['./template-drivem-form.component.scss']
})
export class TemplateDrivemFormComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void { }
user = {
    name: '',
    email: '',
    age: null,
    gender: ''
  };

  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      alert('Form Submitted Successfully!');
    } else {
      console.log('Form is invalid');
    }
  }
  


}
