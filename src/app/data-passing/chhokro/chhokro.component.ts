import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chhokro',
  templateUrl: './chhokro.component.html',
  styleUrls: ['./chhokro.component.scss']
})
export class ChhokroComponent implements OnInit {

    constructor() {
      this.chhokroName.emit("Rohit");
     }
  ngOnInit(): void {
  }

  @Output() chhokroName = new EventEmitter<string>();


}
