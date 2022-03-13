import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitter/emitters';
import { LoginResponse } from '../model/login-response';
import { User } from '../model/user';
import { AuthService } from '../service/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  loginFailed: boolean = false;
  loginFailureDescription!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  submit(): void {
    this.loginFailed = false;
    let username = this.form.get('username')?.value
    let password = this.form.get('password')?.value
    this.authService.login(username, password).subscribe(
      (authResult: LoginResponse) => {
        console.log(authResult);
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.log(err);
        this.loginFailed = true;
        this.loginFailureDescription = 'Unable to sign in!';
      }
      )
    // let jwt = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NjY2NTU5MywiaWF0IjoxNjQ2NjY1NTkzfQ.vSMA51qkLyffxk4Cj65Va58sQQBtDssMwfGApNUZcNo";
    // this.onAuth(jwt);
    // this.router.navigate(['/']);
  }

  

}
