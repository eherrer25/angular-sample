import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('',[
    Validators.required,
  ]);

  profileForm = this.formBuilder.group({
    email: [this.email],
    password: [this.password],
  });


  onLogin(){
    let formEmail = this.email?.value;
    let formPw = this.password?.value;

    if(formEmail == 'admin@mail.com' && formPw == '123456') {
        // alert("Login Success");
        // localStorage.setItem('email', formEmail);
        // localStorage.setItem('pw', formPw);
        this.router.navigate(['dashboard']);
      } else {
        alert("Usuario incorrecto!")
      }
  }

}
