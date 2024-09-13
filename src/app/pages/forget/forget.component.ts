import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  hide = true;
  hide1 = true;
  passwordField: boolean = false;
  emailField: boolean = true;
  forgetForm: FormGroup;
  data: any;
  userdetails: any = {};

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    if (!this.data) {
      this.getdata();
    }
  }

  getdata() {
    this.loginService.getData().subscribe(
      (res) => {
        this.data = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  forgetPassword() {
   
    const enteredEmail = this.forgetForm.value.email;

    this.userdetails = this.data.find(
      (userData: any) => userData.email === enteredEmail
    );

    if (this.userdetails) {
      this.passwordField = true;
      this.emailField = false;

      Swal.fire({
        icon: 'success',
        title: 'Email Found',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Email Not Found',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  }

  onSubmit() {
    if (this.forgetForm.valid && this.data) {
      const enteredEmail = this.forgetForm.value.email;
      const enteredPassword = this.forgetForm.value.password;
      const confirmPassword = this.forgetForm.value.confirmPassword;

      if (enteredPassword === confirmPassword) {
        const user = this.data.find(
          (userData: any) => userData.email === enteredEmail
        );

        if (user) {
          const updatedUser = {
            ...this.userdetails,
            password: this.forgetForm.value.confirmPassword,
          };

          this.loginService
            .updatePassword(this.userdetails.id, updatedUser)
            .subscribe(
              (response) => {
                Swal.fire({
                  icon: 'success',
                  title: 'SuccessFully Forget Password',
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                });
                this.router.navigate(['/login']);
              },
              (error) => {
                console.error('Error updating password:', error);
              }
            );
        } else {
          alert('User not found');
        }
      } else {
        alert('Passwords do not match');
      }
    }
  }
}
