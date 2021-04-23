import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ValidationErrors } from '@angular/forms'
import { ApiconnectionService } from '../apiconnection.service';
// import { ToastrManager } from 'ng6-toastr-notifications';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  closeResult: string;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log('[scroll]', scrollPosition);   
  }
  constructor(private route: Router, private service: ApiconnectionService) { }
  userdetails = {}
  naam; emaal; mob; pass; pass1; skill;

  newPost = false;
  ngOnInit() { }
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
    password1: new FormControl(''),
    skills: new FormControl('')

  })
  // codeverify=new FormGroup({
  //   code:new FormControl('')
  // })

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get mobile() {
    return this.form.get('mobile');
  }
  get password() {
    return this.form.get('password');
  }
  get password1() {
    return this.form.get('password1');
  }
  get skills() {
    return this.form.get('skills');
  }
  // get code()
  // {return this.codeverify.get('code');}
  userDetails = {};
  arr = [{
    name: '',
    id: 123,
    class: 2,
    year: 12
  }];
  x = true;
  // y;
  newDetails: any;
  phoneno = /^((?![0-5])[0-9]{10}$)/;
  emailTest = /[A-Za-z._0-9]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/;
  passwordTest = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/;
  onSubmit(d1: any, d2: any, d3: any, d4: any, d5: any, d6: any) {


    console.log(d1, d2, d3, d4, d5, d6);
    if (d1.value == ' ' || d1.value == '' || d2.value == '' || d2.value == ' ' || d3.value == '' || d3.value == ' ' || d4.value == '' || d4.value == ' ' || d5.value == ' ' || d5.value == '' || d5.value == ' ' || d6.value == '') {
      this.x = false;
      alert("Please fill all the credentials");
    }
    else {
      if (!this.phoneno.test(d3.value)) {
        alert("mobile number must be at least 10 digit and start with 6-9 ");
      } else {
        if (d4.value.length <= 6 || d4.value.length >= 20) {
          alert("password length must be between 7 to 20 character");
        } else {
          if (d4.value != d4.value) {
            alert("Password doesn't matched");
          } else {
            if (!this.emailTest.test(d2.value)) {
              alert("Please enter a valid email for example john.doe@gmail.com");

            } else {
              if (!this.passwordTest.test(d4.value)) {
                alert("Password should contain atleast 1 capital letter,1 number and special character");

              } else {


                this.service.signup(d1.value, d2.value, d3.value, d4.value, d5.value, d6.value).subscribe((res: any) => {
                  this.userDetails = res;
                  console.log(res);
                  this.service.saveToken(res['token']);
                  this.route.navigate(['/home']);

                }, (err) => {

                  if (err.status === 403) {
                    alert(err.error.msg + " " + "please fill all the credentials again properly",);
                    console.log(err.token);
                  }
                }

                );

              }
            }
          }
        }
      }
    }
  }
  //   onSubmit(d1,d2,d3,d4,d5,d6){
  //     window.scroll({ 
  //       top: 0, 
  //       left: 0, 
  //       behavior: 'smooth' 
  //     });
  //     this.newPost=true;
  // this.naam=d1.value;
  // this.emaal=d2.value;
  // this.mob=d3.value;
  // this.pass=d4.value;
  // this.pass1=d5.value;
  // this.skill=d6.value;
  //     console.log(d1.value);

  // this.service.getCode(this.emaal,this.mob).subscribe((res)=>{
  //   console.log(res);
  // },(err)=>{if(err.status==403){

  //   window.alert(err.error.msg)
  // }}
  // )
  //   }

  //   onCode(code){
  //     console.log(code.value);
  //     if(!localStorage.getItem('token')){

  //       this.service.signup(this.naam,this.emaal,this.mob,this.pass,this.pass1,this.skill,code.value).subscribe((res)=>{
  //         this.userdetails=res
  //         localStorage.setItem('token',res['token']);
  //         localStorage.setItem('name',this.naam);
  //         localStorage.setItem('email',this.emaal);


  //         console.log(res)
  //         this.route.navigate(['/'])
  //         },(err)=>{

  //             if(err.status==403){
  //               window.alert(err.error.msg)
  //             }

  //         });
  //     }

  //   }
}
