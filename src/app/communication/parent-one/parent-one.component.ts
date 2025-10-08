import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
]
}
