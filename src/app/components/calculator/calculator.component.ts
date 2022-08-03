import { Component, OnInit } from '@angular/core';
import { CaculatorService } from 'src/app/service/calculator.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  constructor(public CaculatorService: CaculatorService) {}
  result = 0;
  arr: any = [];
  data: any;

  

  ngOnInit(): void {
    this.CaculatorService.setOnChangeResult((value) => {
      console.log(value)
      this.result = value
    })
  }
  pressNumber(input: any){
     this.data = parseFloat(input);
    if (isNaN(this.data)) {
      if (input == '=') {
        let result = this.CaculatorService.calculate(
          this.CaculatorService.currentResult,
          this.CaculatorService.currentInput,
          this.CaculatorService.currentOperator
        );
        this.CaculatorService.currentInput = 0;
        this.CaculatorService.currentOperator = '';

        this.CaculatorService.setResult(result);
      } else {
        this.CaculatorService.currentOperator = input;
      }
    } else {
      if (this.CaculatorService.currentOperator != '') {
        this.CaculatorService.currentInput = parseFloat(
          this.CaculatorService.currentInput.toString() + this.data.toString()
        );
      }  else {
        if (this.CaculatorService.currentOperator != "") {
          this.CaculatorService.currentInput = parseFloat(`${this.CaculatorService.currentInput}${this.data}`)
        } else {
          this.CaculatorService.setResult(parseFloat(`${this.CaculatorService.currentResult}${this.data}`))
        }
      }
    }
  }
}