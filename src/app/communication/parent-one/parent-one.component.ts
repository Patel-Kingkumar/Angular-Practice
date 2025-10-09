import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss'],
})
export class ParentOneComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  messageFromChild = '';

  receiveMessage(message: any) {
    this.messageFromChild = message;
  }
}
