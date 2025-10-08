import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mummy-papa',
  templateUrl: './mummy-papa.component.html',
  styleUrls: ['./mummy-papa.component.scss']
})
export class MummyPapaComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  message: any;

  reeiveMssage(msg: any) {
    this.message = msg;
  }

}
