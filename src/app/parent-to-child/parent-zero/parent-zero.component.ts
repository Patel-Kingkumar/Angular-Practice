import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-zero',
  templateUrl: './parent-zero.component.html',
  styleUrls: ['./parent-zero.component.scss']
})
export class ParentZeroComponent {

  msg: any;

  onChildMessage(data: any) {
    this.msg = data;
  }
}
