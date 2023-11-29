import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
  ){}
  ngOnInit(): void {
    this.form= this.formBuilder.group({
      email:'',
      password:''
    })
  }
  ValidateEmail=(email:any) =>
  {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
   
    if (email.match(validRegex))
    {
      return (true)
    }
     else{return (false)}
      
  }
  submit():void{
    let user = this.form.getRawValue()
    console.log(user)

    if( user.email=='' || user.password=='' ){
      alert("Please enter all the fields")
    }
    else if (!this.ValidateEmail(user.email)){
      alert("You have entered an invalid email address!")
    }else{
      this.http.post("http://localhost:5000/api/login",user,{
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
  }}
