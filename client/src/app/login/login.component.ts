import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormGroup, FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  email_false = false;
  password_false = false;
  password_not_match = false;
  login_false = false;
  email_not_found = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private modalService: ModalService
  ) { }

  closeParentModal() {
    this.modalService.close();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      save: false
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
    this.email_false = user.email == '' || !this.ValidateEmail(user.email) ? true : false;
    this.password_false = user.password == '' ? true : false;
    this.login_false = false;
    this.email_not_found = false;
    this.password_not_match = false;
    if (!this.email_false && !this.password_false) {
      this.http.post("/api/auth/login", user, {
        withCredentials: true
      })
        .subscribe({
          next: (response) => {
            this.closeParentModal();
            this.router.navigate(['/']);
          },
          error: (err) => {
            if (err.status == 404) {
              this.email_not_found = true;
            }
            else if (err.status == 401) {
              this.password_not_match = true;
            }
            else {
              this.login_false = true;
            }
          }
        });

    }
  }
  googleLogin(): void {
    window.location.href = "http://localhost:5000/api/auth/google";
  }
}
