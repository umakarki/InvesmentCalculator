import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  display=true;

  toggle(){
this.display=!this.display;
  }
  logout(){
    localStorage.clear();
    // this.alert.openSnackBar(`Logged out successfully !!`, 'success-snackbar')
    this.router.navigate(['/signup']);
  }
}
