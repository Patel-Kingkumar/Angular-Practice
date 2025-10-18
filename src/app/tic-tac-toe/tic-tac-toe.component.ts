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
  gameOver: boolean = false;
    winningCombinations: number[][] = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal
    [2, 4, 6]  // reverse diagonal
  ];


  changeText(index: number) {
    if (this.gameOver || this.buttons[index] !== '') return; // ignore clicks if game over
    if (this.counter % 2 === 0) { 
      this.buttons[index] = 'X';
      this.textDisplay = '0 Player Turn';
    } else {
      this.buttons[index] = '0';
      this.textDisplay = 'X Player Turn';
    }
    this.counter++;
    this.disabledButtons[index] = true;

    const winner = this.checkWinner();
    if (winner) {
      this.textDisplay = `${winner} Wins 🎉`;
      this.gameOver = true;
      this.disabledButtons = Array(this.buttons.length).fill(true);
    } else if (this.counter === 9) {
      this.textDisplay = 'Draw 🤝';
      this.gameOver = true;
    }    
  }

  checkWinner(): string | null {
    for (let combo of this.winningCombinations) {
      const [a, b, c] = combo;
      if (
        this.buttons[a] &&
        this.buttons[a] === this.buttons[b] &&
        this.buttons[a] === this.buttons[c]
      ) {
        return this.buttons[a];
      }
    }
    return null;
  }

  onReset() {
    this.buttons = ['', '', '', '', '', '', '', '', ''];
    this.textDisplay = 'X Player Turn';
    this.disabledButtons = Array(this.buttons.length).fill(false);
    this.counter = 0;
    this.gameOver = false;
  }
}
