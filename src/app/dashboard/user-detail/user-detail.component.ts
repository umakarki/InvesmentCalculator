import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private api:ApiServiceService,
    private snackBar:MatSnackBar){ }
    userList:any;

    ngOnInit(): void {
      this.api.getUser().subscribe(data=>{
        this.userList=data;
      })
    
    }
  
    deleteuser(user:any){
      this.api.deleteUser(user.id).subscribe(res=>{
        const sucessMeg="User details will be deleted";
        const action="close";
        this.snackBar.open(sucessMeg,action, {
          duration:1000,
    });
        this.ngOnInit();
      })
    }

}
