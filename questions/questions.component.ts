import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectionService } from '../apiconnection.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit,DoCheck {

 
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
  ngOnInit(): void {
  }
  delete()
  {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.service.x=false;
    this.route.navigate(['/login']) ;
  }
  onSubmit()
  {
    this.route.navigate(['/login'])
  }
  onSignup(){
    this.route.navigate(['/signup'])
  }
  user()
  {
    this.route.navigate(['/user']);
  }
  blogPost()
  {
    this.route.navigate(['/blogs']);
  }
  about()
  {
    this.route.navigate(['/about']);
  }
  users()
  {
    this.route.navigate(['/allusers']);
  }
  contact()
  {
    this.route.navigate(['/contactus']);
  }
  faq()
  {
    this.route.navigate(['/faq']);
  } 
  tcp()
  {
    this.route.navigate(['/tcp']);
  }

}
