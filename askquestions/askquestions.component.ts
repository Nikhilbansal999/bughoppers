import { Component, OnInit } from '@angular/core';
import { ApiconnectionService } from '../apiconnection.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,ValidationErrors, Validators} from '@angular/forms'

@Component({
  selector: 'app-askquestions',
  templateUrl: './askquestions.component.html',
  styleUrls: ['./askquestions.component.css']
})
export class AskquestionsComponent implements OnInit {

constructor(private service:ApiconnectionService,private route:Router){}
counter=0;
  
ngDoCheck(){
  if(!this.service.x)
  {
    if(!localStorage.getItem('email')|| localStorage.getItem("token"))
    {
      this.y=true;
      this.z=true;
    }else
    {
      this.y=false;
      this.z=false;
    }
  }
  }
    ngOnInit() 
  {}
    form=new FormGroup({
      title:new FormControl('',),
    technology:new FormControl(''),
    question:new FormControl(''),
    
    
  })
  get title(){
    return this.form.get('title');
  }
  get technology(){
    return this.form.get('technology');
  }
  get question(){
    return this.form.get('question');
  }

  onSubmit(d1,d2,d3){

    let date=new Date();
    let d=date.getDate();
    let h=date.getHours();
    let month=date.getMonth();
    let year=date.getFullYear();
    let minutes=date.getMinutes();
    
    var AmOrPm = h >= 12 ? 'pm' : 'am';
    h=(h%12)||12
    
    var months = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];

    var finalTime=h+" : "+minutes+" "+AmOrPm+ " "+d+" "+months[month] +" " +year ;
    let name=localStorage.getItem("name");
    this.service.question(d1.value,d2.value,d3.value,finalTime,name,this.counter).subscribe((res)=>{
     console.log(res)
    })

     this.route.navigate(['/landingpage'])
   }
   
   

  tcp(){   this.route.navigate(['/tcp']); }
  y;
  z;
 
delete()
{
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      this.service.x=false;
      this.route.navigate(['/login']) ;
}
onsubmit(){    this.route.navigate(['/login']);    }
onSignup(){    this.route.navigate(['/signup']);   }
user(){        this.route.navigate(['/user']);        }
blogPost(){    this.route.navigate(['/blogs']);    }
about() {      this.route.navigate(['/about']);       }
users() {      this.route.navigate(['/allusers']);    }
contact() {    this.route.navigate(['/contactus']);}
faq(){         this.route.navigate(['/faq']);           } 
Home(){        this.route.navigate(['/landingpage']);              }




}
