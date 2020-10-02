import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public num1:number;
  public num2:number;
  public result:number;

  addition() {
    this.result = this.num1 + this.num2;
  }
  subtract() {
    this.result = this.num1 - this.num2;
  }
  multiply() {
    this.result = this.num1 * this.num2;
  }
  divide() {
    this.result = (this.num1) / (this.num2);
  }
}
