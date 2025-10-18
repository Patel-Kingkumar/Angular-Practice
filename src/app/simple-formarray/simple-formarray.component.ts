import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-formarray',
  templateUrl: './simple-formarray.component.html',
  styleUrls: ['./simple-formarray.component.scss']
})
export class SimpleFormarrayComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.orderGroup = new FormGroup({
      items: new FormArray([])
    });
  }

  orderGroup: FormGroup | any;
  items: FormArray | any;

  createItem() {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem() {
    this.items = this.orderGroup.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items = this.orderGroup.get('items') as FormArray;
    this.items.removeAt(index);
  }

  submit() {
    console.log("form  : ", this.orderGroup.value);
  }
}
