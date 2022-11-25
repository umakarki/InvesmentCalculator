import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hybrid-calculator',
  templateUrl: './hybrid-calculator.component.html',
  styleUrls: ['./hybrid-calculator.component.css']
})
export class HybridCalculatorComponent implements OnInit {
  hybridForm = new FormGroup({
    lumpsumAmount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    sipAmount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    hybridMonth: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    hybridPercent: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  })
  get lumsmAmounts() {
    return this.hybridForm.get('lumpsumAmount');
  }
  get sipAmounts() {
    return this.hybridForm.get('sipAmount');
  }

  get months() {
    return this.hybridForm.get('hybridMonth');
  }
  get percents() {
    return this.hybridForm.get('hybridPercent');
  }
  constructor() { }

  ngOnInit(): void {
  }

  lumpsumAmount: any;
  sipAmount: any;
  month: any;
  percent: any;
  interest: any;
  totalLumAmount: any;
  totalSipAmount: any;
  totalAmount: any;
  paidAmount: any;
  monthlyRate: any;
  year: any

  add() {


    this.monthlyRate = this.percent / 12 / 100;
    this.year = this.month / 12;

    this.totalLumAmount = Math.round(this.lumpsumAmount * (Math.pow((1 + (this.percent / 100)), this.year)))
    this.totalSipAmount = Math.round(this.sipAmount * (1 + this.monthlyRate) * ((Math.pow((1 + this.monthlyRate), this.month)) - 1) /
      this.monthlyRate);
    this.totalAmount = Math.round(this.totalLumAmount + (this.totalSipAmount));

    this.paidAmount = ((this.sipAmount * this.month) + (this.lumpsumAmount * 1));

    this.interest = Math.round(this.totalAmount - (this.paidAmount * 1));
    // console.log(this.lumpsumAmount)

  }

}
