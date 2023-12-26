import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  constructor(private http: HttpClient) { }
  logOut(){
    return this.http.post<any>('api/auth/logout', { withCredentials: true })
  }

}
