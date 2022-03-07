import { HttpClient } from '@angular/common/http';
import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitter/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
    //   (res: any) => {
    //     this.message = `Hi ${res.name}`;
    //   },
    //   err => {
    //     this.message = 'You are not logged in';
    //   }
    // );
    this.message = `Hi`;
  }

}
