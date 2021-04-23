import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectionService } from '../apiconnection.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,DoCheck {
  constructor(private route:Router,private service:ApiconnectionService) { }
  y;
  z;
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
  allDetails;
  finalData=[]
    ngOnInit(): void {
      this.service.fetchUsers(localStorage.getItem("email")).subscribe((res)=>{
        // console.log(res);
        this.allDetails=res;
        for (var i=0;i<this.allDetails.length;i++)
        {
          let name=this.allDetails[i].name;
          let email=this.allDetails[i].email;
          let skills=this.allDetails[i].skills;
          this.finalData.push({
            'name':name,
            'email':email,
            'skills':skills
          })}})
        console.log(this.finalData);
        }
  
    delete()
    {
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      this.service.x=false;
      this.route.navigate(['/login']) ;
    }
  
    onSubmit(){this.route.navigate(['/login']); }
    onSignup(){this.route.navigate(['/signup']);}
    user(){this.route.navigate(['/user']); }
    blogPost(){this.route.navigate(['/blogs']); }
  users(){this.route.navigate(['/allusers']);}  
  contact(){this.route.navigate(['/contactus']);}
  faq(){this.route.navigate(['/faq']);} 
  ask(){this.route.navigate(['/askquestions']);}
  testing(){this.route.navigate(['/testing']);}
  Home(){this.route.navigate(['/landingpage']);}
  unansq(){this.route.navigate(['/unanswered']);}
  chats(){  this.route.navigate(['/chats']);}
  string(){  this.route.navigate(['/string']);}
  pattern(){  this.route.navigate(['/pattern']);}
  number(){  this.route.navigate(['/number']);}
  tree(){  this.route.navigate(['/tree']);}
  graph(){  this.route.navigate(['/graph']);}
  linkedlist(){  this.route.navigate(['/linkedlist']);}
  stack(){  this.route.navigate(['/stack']);}
  queue(){  this.route.navigate(['/queue']);}
  array(){this.route.navigate(['/array']);  }
  profile(){this.route.navigate(['/user'])}
}
