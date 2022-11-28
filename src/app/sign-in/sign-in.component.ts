import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;

  signinForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern("^[a-zA-Z.@_0-9]+$")])
  })
  get email() {
    return this.signinForm.get('emailId')
  }
  get password() {
    return this.signinForm.get('password')
  }

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar, private api: ApiServiceService) { }


  ngOnInit(): void {
  }

  signIn() {

    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {
          console.log(a)
          console.log(a.emailId);
          console.log(a.password);
          console.log(this.signinForm.value.emailId);
          console.log(this.signinForm.value.password);
          return a.emailId === this.signinForm.value.emailId && a.password === this.signinForm.value.password;
        });
        const user1 = res.find((a: any) => {
          return a.emailId === this.signinForm.value.emailId && a.password != this.signinForm.value.password;
        });

        if (user) {

          const logSucces = "Login Success!"
          const action = "close"
          this.snackBar.open(logSucces, action, {
            duration: 5000,
            verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
            horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
          });

          this.router.navigate(['dashboard/sip'])
        } else if (user1) {

          const pswrdNotmatch = "Password does not match!!"
          const action = "close"
          this.snackBar.open(pswrdNotmatch, action, {
            duration: 5000,
            verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
            horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
          });

        } else {

          const userNtFound = "User not found!!"
          const action = "close"
          this.snackBar.open(userNtFound, action, {
            duration: 5000,
          });
        }
      }, err => {
        const wentWrong = "Something went wrong!!"
        const action = "close"
        this.snackBar.open(wentWrong, action, {
          duration: 5000,
        });
      })
  }

}
