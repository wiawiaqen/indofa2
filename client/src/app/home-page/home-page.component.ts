import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
message:string
constructor(private http:HttpClient){}
ngOnInit():void{
  this.http
  .get('http://localhost:5000/api/user',{withCredentials: true})
  .subscribe(
    (res:any)=> {
    this.message=`Hi ${res.name}` 
    Emitters.authEmitter.emit(true)
  },
  (err) => {
    this.message=" You are not logged in"
    Emitters.authEmitter.emit(false)
  }
  )
}
}
