import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitter/emitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void {
    // this.http.post<string>('http://localhost:8000/api/login', this.form.getRawValue(), {
    //   withCredentials: true
    // }).subscribe((authResult) => {
    //   let jwt = authResult
    //   this.onAuth(jwt);
    //   this.router.navigate(['/']);

    // })
    let jwt = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NjY2NTU5MywiaWF0IjoxNjQ2NjY1NTkzfQ.vSMA51qkLyffxk4Cj65Va58sQQBtDssMwfGApNUZcNo";
    this.onAuth(jwt);
    this.router.navigate(['/']);
  }

  onAuth(jwt: string): void {
    // save jwt
    localStorage.setItem('jwt', jwt);
    Emitters.authEmitter.emit(true)
  }

}
