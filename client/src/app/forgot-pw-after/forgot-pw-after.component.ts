import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pw-after',
  templateUrl: './forgot-pw-after.component.html',
  styleUrls: ['./forgot-pw-after.component.css']
})
export class ForgotPwAfterComponent {
  email: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.email = val['email'];
    });
  }
  resend(): void {
    this.http.post("http://localhost:5000/api/auth/send-email", this.email, {
      withCredentials: true
    })
      .subscribe({
        next(res) {
          alert("Email sent");
        },
        error(err) {
          alert(err.error.message);
        }
      }
      )
  }
}
