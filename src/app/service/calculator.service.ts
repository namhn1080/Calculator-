import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaculatorService {
  currentInput: number = 0;
  currentOperator: string = '';
  currentResult: number = 0;
  constructor() {}
  callbacks: any[] = [];
  calculate(x: number, y: number, operator: string) {
    let result = 0;
    console.log(x, y, operator);

    switch (operator) {
      case '+':
        result = x + y;
        
        break;

      case '-':
        result = x - y;
        break;

      case 'X':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
    }
    return result;
 
  }




  setOnChangeResult(callback: (value: number) => void): void {
    this.callbacks.push(callback);
  }

  setResult(result: number) {
    this.currentResult = result;
    for (let callback of this.callbacks) {
      callback(this.currentResult);
    }
  }
}