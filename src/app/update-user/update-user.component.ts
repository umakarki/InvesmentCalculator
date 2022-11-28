import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: any
  updateForm !: FormGroup;

  constructor(private route: ActivatedRoute,
    private api: ApiServiceService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.updateForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+\.?[a-zA-Z]+$/)]],
      emailId: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+\.?[a-zA-Z]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^([a-zA-Z0-9]+\@?[a-zA-Z0-9]+)$/)]],
      mobileNumber: ['', [Validators.required,
      Validators.minLength(10), Validators.pattern(/^((|9|8|7|0|)[0-9]{9})$/)]]
    })

    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.getData();
  }
  getData() {
    this.api.getOneuser(this.id).subscribe((res: any) => {
      console.log(res)
      //const data=res;
      this.updateForm.controls["firstName"].setValue(res.firstName);
      this.updateForm.controls["lastName"].setValue(res.lastName);
      this.updateForm.controls["city"].setValue(res.city);
      this.updateForm.controls["emailId"].setValue(res.emailId);
      this.updateForm.controls["mobileNumber"].setValue(res.mobileNumber);
      this.updateForm.controls["password"].setValue(res.password);
    })
  }


  upDate() {
    console.log(this.updateForm.value)
    this.api.updateData(this.id, this.updateForm.value).subscribe(data => {

      const sucessMeg = "updated Sucessfully";
      const action = "close";
      this.snackBar.open(sucessMeg, action, {
        duration: 1000,
      });
      // this.updateForm.reset();

      this.router.navigate(['dashboard/userDetail'])
    }, err => {
      const errMsg = "unable to Update";
      const action = "close";
      this.snackBar.open(errMsg, action, {
        duration: 1000,

      })
    })
  }

}
