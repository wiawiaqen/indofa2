import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email_false = false;
  name_false = false;
  password_false = false;
  cfpassword_false = false;
  password_not_match = false;
  login_false = false;
  email_found = false;

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
    this.name_false = user.name == '' ? true : false;
    this.email_false = user.email == '' || !this.ValidateEmail(user.email) ? true : false;
    this.password_false = user.password == ''? true : false;
    this.cfpassword_false = user.cfpassword == ''? true : false;
    this.password_not_match = user.password !== user.cfpassword ? true : false;
    this.login_false = false;
    this.email_found = false;
    if (!this.email_false && !this.password_false && !this.name_false && !this.password_not_match && !this.cfpassword_false) {
      this.http.post("/api/auth/register", user, {
        withCredentials: true
      })
        .subscribe({
          next: (response) => {
            this.router.navigate(['/'])
          },
          error: (err) => {
            if (err.status == 400) {
              this.email_found = true;
            }
            else if (err.status == 401) {
              this.password_not_match = true;
            }
            else {
              this.login_false = true;
            }
          }
        })
    }
  //   console.log(user)

  //   if (user.name == '' || user.email == '' || user.password == '' || user.cfpassword == '') {
  //     alert("Please enter all the fields")
  //   }
  //   else if (user.password !== user.cfpassword) {
  //     alert("Password and confirm password do not match");
  //     return;
  //   }
  //   else if (!this.ValidateEmail(user.email)) {
  //     alert("You have entered an invalid email address!")
  //   } else {
  //     this.http.post("/api/auth/register", user, {
  //       withCredentials: true
  //     })
  //       .subscribe({
  //         next: (response) => {
  //           this.router.navigate(['/'])
  //         },
  //         error: (err) => {
  //           alert("blabla")
  //         }
  //       })
  //   }
  }
  gg(): void {
    window.location.href = "/api/auth/google";
  }

}
