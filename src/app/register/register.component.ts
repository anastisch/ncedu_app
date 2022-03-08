
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBiulder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBiulder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get getName() {
    return this.form.get('name');
  }

  get getEmail() {
    return this.form.get('email');
  }

  get getPassword() {
    console.log(this.form.get('password'));
    return this.form.get('password');
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:8080/api/register', this.form.getRawValue())
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/login'])
      });
  }
}
