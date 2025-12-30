import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.scss']
})
export class ChildChildComponent implements OnInit {

  @Output()  childChildToParent = new EventEmitter<string>();

  ngOnInit(): void {
    this.childChildToParent.emit("I'm child-child component");
  }

}
