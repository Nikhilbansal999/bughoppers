import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectionService } from './apiconnection.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'resel';
  constructor(private route:Router, private service: ApiconnectionService){}
  //  ngDoCheck(){

//     if(localStorage.getItem('email')){
// alert('login');
//     }else{
// alert('not login');
//     }
  //  console.log(localStorage.getItem('email'););
//  }
y:any;
z:any;
  ngDoCheck() {
    if(!this.service.xx)
    {
      if(localStorage.getItem('email'))
      {this.y = true;
      this.z=true;}
      else
      {this.y = false;
      this.z=false;}
      this.service.xx=false;
    }
  }

  ngOnInit(){
/* 
    if(this.x){
      this.y=true;

    }else{
    this.y =false;
    } */

  
/* this.data.msg.subscribe((r)=>{
  this.x = r;

  this.cont.msg.subscribe((pr)=>{
    this.x=pr;

    this.serve.msg.subscribe((er)=>{this.x=er})
  })
}) */
  }
  
  delete()
  {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.service.xx = false;
    this.route.navigate(['/login']);
    
  }
  Go()
{
  this.route.navigate(['/mobile']);
}
home(){
  this.route.navigate(['/home'])
}

}
