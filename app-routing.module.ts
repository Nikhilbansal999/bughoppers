import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TestingcodeComponent } from './testingcode/testingcode.component';
import { AskquestionsComponent } from './askquestions/askquestions.component';
import { QuestionsComponent } from './questions/questions.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { Testing2Component } from './testing2/testing2.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MypostsComponent } from './myposts/myposts.component';
const routes: Routes = [
  {path:'',component:FirstpageComponent},
  // {path:'landingpage',component:LandingpageComponent},
  {path:'blogs',component:BlogpostComponent},
  {path:'user',component:UserProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:'allusers',component:UsersComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'askquestions',component:AskquestionsComponent},
  {path:'write',component:TestingcodeComponent},
  {path:'admin',component:AdminComponent},
  {path:'test',component:Testing2Component},        
  {path:'allblogs',component:AllblogsComponent},
  {path:'home',component:HomepageComponent},
  {path:'myposts',component:MypostsComponent},
    {path:'**',component:LandingpageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
