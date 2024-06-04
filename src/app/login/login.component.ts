import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Users } from '../../user-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);

  alertMessage = '';
  isAlertMessage = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login(){
    let username = this.loginForm.value.username ?? '';
    let password = this.loginForm.value.password ?? '';

    if(this.loginForm.valid){
      const user = Users.some(user => user.username === username && user.password === password);

      // If user exist redirect to Employee List Page, but if user not exist show alert message
      if(user){
        this.router.navigateByUrl('/list');
      } else {
        this.isAlertMessage = true;
        this.alertMessage = 'Username or Password is wrong!'
      }
    }
  }
}
