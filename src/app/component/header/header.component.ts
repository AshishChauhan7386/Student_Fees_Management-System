import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, UrlTree } from '@angular/router';
import { AdmindetailComponent } from 'src/app/popup/admindetail/admindetail.component';

import { LoginService } from 'src/app/services/Login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  showFiller = false;
  btn2: any = false;
  btn: any = false;
  sidenav: any = false;

  constructor(private router: Router, private loginService: LoginService,private dialog:MatDialog) {
    this.loginService.isSuccess$.subscribe((isSuccess: any) => {
      if (isSuccess) {
        
        this.router.navigate(['/Dashboard']);
      }
    });

  }
     

  isActive(route: string): boolean {
    const options: UrlTree = this.router.parseUrl(route);
    return this.router.isActive(options, false);
  }
  ngOnInit(): void {
    this.loginService.isSuccess$.subscribe((isSuccess) => {
      this.btn2 = isSuccess;
      this.btn = isSuccess;
      this.sidenav = isSuccess;
    });


    const loginResult = localStorage.getItem('isSuccess');
    if (loginResult) {
      this.loginService.setLoginSuccess(true); 
    }
  }

  LogOut(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.setLoginSuccess(false);

        localStorage.removeItem('isSuccess');
        localStorage.removeItem('loggedInUser');

        this.router.navigate(['/']);

        Swal.fire({
          title: 'Logged Out!',
          text: 'You have been successfully logged out.',
          icon: 'success',
        });
      }
    });
  }
  admindetails(){
this.dialog.open(AdmindetailComponent)
  }
}
