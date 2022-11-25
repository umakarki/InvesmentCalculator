import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sip-calculator',
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.css']
})
export class SipCalculatorComponent implements OnInit {

  sipForm = new FormGroup({
    sipAmount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    sipMonth: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    sipPercent: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  })

  get amounts() {
    return this.sipForm.get('sipAmount');
  }

  get months() {
    return this.sipForm.get('sipMonth');
  }
  get percents() {
    return this.sipForm.get('sipPercent');
  }
  constructor() { }

  ngOnInit(): void {
  }
  amount: any;
  month: any;
  percent: any;
  interest: any;
  totalAmount: any;
  totalPaidAmount: any;
  monthlyRate: any;

  add() {
    //Formula for SIP
    //M=P*({[1+i]n-1}/i)*(1+i);
    //i=monthlyRate;
    //monthlyRate=12%/12;
    this.monthlyRate = this.percent / 12 / 100;
    this.totalAmount = Math.round((this.amount* ((Math.pow((1 + this.monthlyRate), this.month)) - 1) / 
    this.monthlyRate) * (1 + this.monthlyRate));
    this.interest = Math.round(this.totalAmount - (this.amount * this.month));
    this.totalPaidAmount = Math.round(this.amount * this.month)


    // console.log(Math.round(this.amount * (Math.pow(1 + this.monthlyRate, this.month) - 1) / 0.01))
    // console.log(this.monthlyRate);
    // console.log(this.totalAmount);
  }


}
