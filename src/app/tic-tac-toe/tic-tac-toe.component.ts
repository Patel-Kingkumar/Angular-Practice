import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  buttons: string[] = ['', '', '', '', '', '', '', '', ''];

  textDisplay: any = 'X Player Turn';
  disabledButtons: boolean[] = Array(this.buttons.length).fill(false);
  counter: number = 0;


  changeText(index: number) {
    if (this.counter % 2 === 0) { 
      this.buttons[index] = 'X';
      this.textDisplay = '0 Player Turn';
    } else {
      this.buttons[index] = '0';
      this.textDisplay = 'X Player Turn';
    }
    this.counter++;
    this.disabledButtons[index] = true;
  }
}
