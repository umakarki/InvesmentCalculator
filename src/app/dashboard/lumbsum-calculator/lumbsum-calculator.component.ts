import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lumbsum-calculator',
  templateUrl: './lumbsum-calculator.component.html',
  styleUrls: ['./lumbsum-calculator.component.css']
})
export class LumbsumCalculatorComponent implements OnInit {

  lumpsumForm = new FormGroup({
    lumpsumAmount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    lumpsumYear: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    lumpsumPercent: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  })

  get amounts() {
    return this.lumpsumForm.get('lumpsumAmount');
  }

  get years() {
    return this.lumpsumForm.get('lumpsumYear');
  }
  get percents() {
    return this.lumpsumForm.get('lumpsumPercent');
  }
  constructor() { }

  ngOnInit(): void {
  }
  amount: any;
  year: any;
  percent: any;
  interest: any;
  totalAmount: any;
  paidAmount: any;
  monthlyRate: any;

  add() {

    //Formula for Lumbsum
    // A=P*(1+rate of interest)^number of years
    this.totalAmount=Math.round(this.amount*(Math.pow((1+(this.percent/100)),this.year)))
    this.paidAmount=this.amount;
    this.interest=this.totalAmount-this.paidAmount;

  }



}
