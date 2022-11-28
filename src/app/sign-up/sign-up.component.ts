import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide = true;

  signupForm=new FormGroup({
  firstName:new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20),Validators.pattern("^[a-zA-Z.]+$")]),
  lastName:new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20),Validators.pattern("^[a-zA-Z.]+$")]),
  mobileNumber:new FormControl('',[Validators.required,Validators.pattern(/^((9|8|7|0)[0-9]{9})$/)]),
  emailId:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\\.[a-z]{2,4}$")]),
  city:new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20),Validators.pattern("^[a-zA-Z.]+$")]),
  password:new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(20),Validators.pattern("^[a-zA-Z.@_0-9]+$")]),
})
get firstName(){
 return this.signupForm.get('firstName');
}
get lastName(){
  return this.signupForm.get('lastName');
 }
 get mobileNumber(){
  return this.signupForm.get('mobileNumber');
 }
 get email(){
  return this.signupForm.get('emailId');
 }
 
 get city(){
  return this.signupForm.get('city');
 }
 
 get passWord(){
  return this.signupForm.get('password');
 }
 
  constructor(private router:Router,private http:HttpClient, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  signUp(){
    console.log(this.signupForm.value)
    

    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      // console.log(res)
      const sucessMeg="signUp Sucessfully";
      const action="close";
      this.snackBar.open(sucessMeg,action, {
        duration:100000,
        verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
          horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'

      });

      this.signupForm.reset();
      this.router.navigate(['signin'])
    },err=>{
      const wentWrong="Something went wrong";
      const action="close";
      this.snackBar.open(wentWrong,action, {
        duration:3000,
      });
    })
    
  }

}

