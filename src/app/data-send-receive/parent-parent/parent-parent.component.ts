import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-parent',
  templateUrl: './parent-parent.component.html',
  styleUrls: ['./parent-parent.component.scss']
})
export class ParentParentComponent {

  message: any;
  getChildMessage(data: any) {
    this.message = data;
  }
}
