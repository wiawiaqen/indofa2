import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpw',

  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css'],

})
export class ResetpwComponent implements OnInit {
  resetForm: FormGroup;
  token: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', Validators.required],
      cfpassword: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe((val) => {
      this.token = val['token'];
      console.log(this.token);
    });
  }

  reset(): void {
    let user = this.resetForm.getRawValue();

    if (user.password == '' || user.cfpassword == '') {
      alert('Please enter all the fields');
    } else if (user.password !== user.cfpassword) {
      alert('Password and confirm password do not match');
    } else {
      this.http
        .post('http://localhost:5000/api/auth/reset-pw', { token: this.token, password: user.password })
        .subscribe(
          () => this.router.navigate(['/login']),
          (err) => {
            alert(err.error.message);
          }
        );
    }
  }
}
