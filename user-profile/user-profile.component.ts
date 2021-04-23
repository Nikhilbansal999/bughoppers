import { Component, OnInit, DoCheck } from '@angular/core';
import { ApiconnectionService } from '../apiconnection.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { tap, startWith, debounceTime, switchMap, map,endWith } from 'rxjs/operators';
import { FormControl , FormGroup,Validators} from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { ReselitemshowinhomeService } from '../reselitemshowinhome.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit,DoCheck {

  constructor(private service:ApiconnectionService,private route:Router,public reselling:ReselitemshowinhomeService) { }
userDetails={};

myControl = new FormControl();
options = [];
filteredOptions: Observable<any[]>;
  ngOnInit(): void {
 this.service.userprofile(localStorage.getItem('token')).subscribe((res)=>{
  //  console.log(res)
  this.userDetails=res
  console.log(this.userDetails['name']);
  console.log(this.userDetails['_id']);
  console.log(this.userDetails)
  localStorage.setItem('userid',this.userDetails['_id']);
 })
 this.filteredOptions = this.myControl.valueChanges.pipe(
  startWith(''),endWith(''),
  // debounceTime(400),
  switchMap(value => this.doFilter(value))
)
  }

  doFilter(value) {
    const filtervalue=value.toLowerCase();
    return this.service.getData()
      .pipe(
        map(response => response.filter(option => {
          return option.title.toLowerCase().includes(filtervalue)
        }))
      )
  }
  displayFn(subject)
  {
    return subject?subject.title:undefined;
  }
  
question(){this.route.navigate(['/askquestions']) }
blogs(){this.route.navigate(['/blogs']) }
chat(){this.route.navigate(['/chat']) }
// login(){this.route.navigate(['/login']) }
signup(){this.route.navigate(['/signup']) }

Home()
{
  this.route.navigate(['/landingpage'])
}

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
  blogpost()
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
  askquestion()
  {
    this.route.navigate(['/askquestions']);
  }
  login()
  {
    this.route.navigate(['/login']);
  }
  
}
