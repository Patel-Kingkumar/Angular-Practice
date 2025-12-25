import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-zero',
  templateUrl: './child-zero.component.html',
  styleUrls: ['./child-zero.component.scss']
})
export class ChildZeroComponent implements OnInit {

  @Output() childMsg = new EventEmitter<string>();

  ngOnInit(): void {  
    this.childMsg.emit("Hello Parent, I'm your child");
  }
}
