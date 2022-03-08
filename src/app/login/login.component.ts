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
      name: '',
      password: ''
    })
  }

  submit(): void {
   this.http.post<string>('http://localhost:8080/api/login', this.form.getRawValue(), { withCredentials: true})
    .subscribe((authResult: any) => {
      let jwt = authResult.token;
      let id = authResult.id;
      this.onAuth(jwt, id);
      this.router.navigate(['/']);
    })
  }

  onAuth(jwt: string, id: any): void {
    // save jwt
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('id', id);
    Emitters.authEmitter.emit(true);
  }

}
