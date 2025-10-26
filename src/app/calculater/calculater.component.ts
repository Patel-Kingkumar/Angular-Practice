import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.scss'],
})
export class CalculaterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  expression: string = '';
  result: string = '0';

  // Called when number or operator buttons are clicked
  onPress(value: string) {
    // prevent two operators in a row
    const lastChar = this.expression.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];

    if (operators.includes(value) && operators.includes(lastChar)) {
      this.expression = this.expression.slice(0, -1) + value;
    } else {
      this.expression += value;
    }

    this.calculateResult();
  }

  // Clears all input
  onClear() {
    this.expression = '';
    this.result = '0';
  }

  // Removes the last character
  onBack() {
    this.expression = this.expression.slice(0, -1);
    this.calculateResult();
  }

  // Evaluates the full expression when '=' is pressed
  onEqual() {
    try {
      const sanitizedExpr = this.expression
        .replace(/÷/g, '/')
        .replace(/×/g, '*');
      const evalResult = Function(`"use strict"; return (${sanitizedExpr})`)();
      this.result = evalResult !== undefined ? evalResult.toString() : '0';
      this.expression = this.result; // continue calculation from result
    } catch {
      this.result = 'Error';
    }
  }

  // Live result preview (optional)
  private calculateResult() {
    try {
      if (this.expression === '') {
        this.result = '0';
        return;
      }
      const sanitizedExpr = this.expression
        .replace(/÷/g, '/')
        .replace(/×/g, '*');
      const evalResult = Function(`"use strict"; return (${sanitizedExpr})`)();
      if (!isNaN(evalResult)) {
        this.result = evalResult.toString();
      }
    } catch {
      // do nothing for incomplete expressions like "5+"
    }
  }
}
