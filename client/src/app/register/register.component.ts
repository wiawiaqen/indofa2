import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      cfpassword: ''
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
    let user = this.form.getRawValue()
    console.log(user)

    if (user.name == '' || user.email == '' || user.password == '' || user.cfpassword == '') {
      alert("Please enter all the fields")
    }
    else if (user.password !== user.cfpassword) {
      alert("Password and confirm password do not match");
      return;
    }
    else if (!this.ValidateEmail(user.email)) {
      alert("You have entered an invalid email address!")
    } else {
      this.http.post("http://localhost:5000/api/auth/register", user, {
        withCredentials: true
      })
        .subscribe({
          next: (response) => {
            this.router.navigate(['/'])
          },
          error: (err) => {
            alert("blabla")
          }
        })
    }
  }
  gg(): void {
    window.location.href = "http://localhost:5000/api/auth/google";
  }

}
