import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormGroup, FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }
  ValidateEmail = (email: any) => {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (email.match(validRegex)) {
      return (true)
    }
    else { return (false) }

  }
  submit(): void {
    let user = this.form.getRawValue();

    if (user.email == '' || user.password == '') {
      alert("Please enter all the fields");
    }
    else if (!this.ValidateEmail(user.email)) {
      alert("You have entered an invalid email address!");
    } else {
      this.http.post("http://localhost:5000/api/auth/login", user, {
        withCredentials: true
      })
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          alert(err.error.message);
        }
      });
    }
  }
    gg(): void {
    window.location.href = "http://localhost:5000/api/auth/google";

  }
}
