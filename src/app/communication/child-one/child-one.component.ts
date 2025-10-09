import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // for without button click
    // this.sendMessage.emit('Hello from Child Component!');
  }
  @Output() sendMessage = new EventEmitter<string>();

  onButtonClick() {
    this.sendMessage.emit('Hello from Child Component!');
  }
}
