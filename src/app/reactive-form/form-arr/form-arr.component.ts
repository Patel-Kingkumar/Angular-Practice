import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-arr',
  templateUrl: './form-arr.component.html',
  styleUrls: ['./form-arr.component.scss'],
})
export class FormArrComponent implements OnInit {
   orderForm: FormGroup | any;
items: FormArray | any;

constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.orderForm = new FormGroup({
    items: new FormArray([])
  });
}

createItem(): FormGroup {
  return this.formBuilder.group({
    name: '',
    description: '',
    price: ''
  });
}

addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
}

submitItem() {
  console.log("form  : ", this.orderForm.value);
}
}
