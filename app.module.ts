import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TestingcodeComponent } from './testingcode/testingcode.component';
import { QuestionsComponent } from './questions/questions.component';
import { AskquestionsComponent } from './askquestions/askquestions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { MaterialModule } from './material/material.module';
import { ServiceWorkerModule } from'@angular/service-worker';
import { environment } from '../environments/environment';
import { BlogpostComponent } from './blogpost/blogpost.component';
import {FormsModule} from '@angular/forms';
import { Testing2Component } from './testing2/testing2.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MypostsComponent } from './myposts/myposts.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    UserProfileComponent,
    TestingcodeComponent, 
    QuestionsComponent,
    AskquestionsComponent,
    AdminComponent,
    FirstpageComponent,
    BlogpostComponent,
    Testing2Component,
    AllblogsComponent,
    HomepageComponent,
    MypostsComponent 
  ],
  imports: [FormsModule,
    BrowserModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,MaterialModule,ServiceWorkerModule.register('/ngsw-worker.js',{enabled:environment.production}), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
