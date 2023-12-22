import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }
  forgetForm: FormGroup
  fb = inject(FormBuilder)
  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ''
    })
  }
  ValidateEmail = (email: any) => {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (email.match(validRegex)) {
      return (true)
    }
    else { return (false) }

  }
submit(){
  let user = this.forgetForm.getRawValue()
  console.log(user)
  if( user.email=='' ){
    alert("Please enter all the fields")
  }
  else if (!this.ValidateEmail(user.email)){
    alert("You have entered an invalid email address!")
  }else{
    this.http.post("http://localhost:5000/api/send-email",user,{
      withCredentials:true
    })
    .subscribe(
      (res)=> 
      this.router.navigate(['/']),
      (err)=>{
        alert(err.error.message)
      }
    )
}
}
}
