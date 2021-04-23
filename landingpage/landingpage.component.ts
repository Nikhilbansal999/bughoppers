import { Component, OnInit ,DoCheck} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import {Router} from '@angular/router'
import {ApiconnectionService} from '../apiconnection.service'
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit,DoCheck {

  constructor(private route:Router,private service:ApiconnectionService,private formBuilder:FormBuilder) {
    this.createNewBlogForm()
    this.createCommentForm();
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
questionDetail;
finalData=[];
daaata;



messageClass;
message;
newPost=false;
loadingBlogs=false;
form;
processing = false;
userDetail;
finaldata=[];
useremail;
username;
blogPosts;
userDetails;
newComment=[];
commentForm;
enabledComments=[];
dislikes;
likes;


  ngOnInit(): void {
    this.service.fetchQuestion(localStorage.getItem('email')).subscribe((res)=>{
      // console.log(res);
      this.questionDetail=res
      for(var i=0;i<this.questionDetail.length;i++)
      {
      let title=this.questionDetail[i].title;
      let technology=this.questionDetail[i].technology;
      let date=this.questionDetail[i].date;
      let name=this.questionDetail[i].name;
      let question=this.questionDetail[i].question;
      let counter=this.questionDetail[i].counter;
      let id=this.questionDetail[i]._id;
      this.finalData.push({
        'title':title,
        'technology':technology,
        'date':date,
        'name':name,
        'question':question,
        'counter':counter,
        'id':id    
      })}})

    // console.log(this.finalData);
    // console.log(this.daaata);
    this.service.userprofile(localStorage.getItem('token')).subscribe((res)=>{
      //  console.log(res)
      this.userDetails=res
      localStorage.setItem('userid',this.userDetails['_id'])
    })

    this.service.userprofile(localStorage.getItem('token')).subscribe((res)=>{
       console.log(res)
      this.userDetail=res;
      this.username=this.userDetail.name
      let name=this.userDetail.name;
      let email=this.userDetail.email;
      let mobile=this.userDetail.mobile;
      let skills=this.userDetail.skills;
      localStorage.setItem('name',name);

      this.finaldata.push({
        
        'name':name,
        'email':email,
        'mobile':mobile,
        'skills':skills
    
      })
      // console.log(this.userDetails['name'])
      console.log(this.finaldata)
    
     })
     this.useremail=localStorage.getItem('email');
this.getAllBlogs();
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
  about(){this.route.navigate(['/about']); }
users(){this.route.navigate(['/allusers']);}  
contact(){this.route.navigate(['/contactus']);}
faq(){this.route.navigate(['/faq']);} 
tcp(){this.route.navigate(['/tcp']);}
ask(){this.route.navigate(['/askquestions']);}
testing(){this.route.navigate(['/testing']);}
Home(){this.route.navigate(['/landingpage']);}
unansq(){this.route.navigate(['/unanswered']);}
chats(){  this.route.navigate(['/chats']);}
admin(){this.route.navigate(['/admin']);}
count=0;

like(data)
{
  data.counter++
  let a=data.counter
  let b=data.name;
  let c=data.title;
  let d=data.technology;
  let e=data.question;
  let f=data.id

if(a<=1){
  this.service.updatelike(a,b,c,d,e,f).subscribe(res=>{
this.daaata=res;
  })
}else if(a>=1){
  data.counter=0;
  let m=data.counter;
  this.service.minuslike(m,b,c,d,e,f).subscribe(res=>{
    console.log(res);
  })
}
}


createNewBlogForm() {
  this.form = this.formBuilder.group({
    title: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(5),
      this.alphaNumericValidation
    ])],
    body: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(500),
      Validators.minLength(5)
    ])]
  })
}

createCommentForm() {
  this.commentForm = this.formBuilder.group({
    comment: ['', Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(200)
    ])]
  })
}

enableCommentForm() {
  this.commentForm.get('comment').enable(); // Enable comment field
}

// Disable the comment form
disableCommentForm() {
  this.commentForm.get('comment').disable(); // Disable comment field
}

 enableFormNewBlogForm() {
  this.form.get('title').enable(); // Enable title field
  this.form.get('body').enable(); // Enable body field
}

// Disable new blog form
disableFormNewBlogForm() {
  this.form.get('title').disable(); // Disable title field
  this.form.get('body').disable(); // Disable body field
}

newBlogForm() {
  this.newPost = true; // Show new blog form
}


reloadBlogs() {
  this.loadingBlogs = true; // Used to lock button
  // Get All Blogs
  this.getAllBlogs();
  setTimeout(() => {
    this.loadingBlogs = false; // Release button lock after four seconds
  }, 4000);
}


alphaNumericValidation(controls) {
  const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
  // Check if test returns false or true
  if (regExp.test(controls.value)) {
    return null; // Return valid
  } else {
    return { 'alphaNumericValidation': true } // Return error in validation
  }
}



onBlogSubmit()
{
  this.processing=false;
  this.disableFormNewBlogForm(); // Lock form
console.log(this.username)
  // Create blog object from form fields
  const blog = {
    title: this.form.get('title').value, // Title field
    body: this.form.get('body').value, // Body field
    createdBy: this.username   // CreatedBy field
  
  }
this.service.newQuestion(blog).subscribe(data=>{
console.log(data);
if(data)
{
  this.getAllBlogs();
  setTimeout(()=>{
    this.newPost=false,
    this.processing=false,
    this.message=false,
    this.form.reset();
    this.enableFormNewBlogForm();
    
  },2000)
}
})

}
goBack() {
  window.location.reload(); // Clear all variable states
}
getAllBlogs(){
this.service.getAllQuestions().subscribe(res=>{
  console.log(res)
  this.blogPosts=res;
})
}
editblog(id)
{
localStorage.setItem('blogid',id);
this.route.navigate(['/edit-blog'])
}
likeBlog(id)
{
//  let a= localStorage.setItem('blogid',id)
// console.log(id);
this.service.likeQuestion(id).subscribe((res)=>{
  this.getAllBlogs();
  // console.log(res);
  // this.likes=res;

})
}
dislikeBlog(id)
{
console.log(id);
this.service.dislikeQuestion(id).subscribe((res)=>{
  this.getAllBlogs();
  // console.log(res);
  // this.dislikes=res;
  // console.log(this.dislikes);

})
}
deleteblog(id)
{
let h=window.confirm("Are you sure you want to delete this blogpost")
if(h){
this.service.deleteQuest(id).subscribe((res)=>{
  this.getAllBlogs();
  console.log(res);
})
}

}


draftComment(id) {
  this.commentForm.reset(); // Reset the comment form each time users starts a new comment
  this.newComment = []; // Clear array so only one post can be commented on at a time
  this.newComment.push(id); // Add the post that is being commented on to the array
}
// Function to cancel new post transaction
cancelSubmission(id) {
  const index = this.newComment.indexOf(id); // Check the index of the blog post in the array
  this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
  this.commentForm.reset(); // Reset  the form after cancellation
  this.enableCommentForm(); // Enable the form after cancellation
  this.processing = false; // Enable any buttons that were locked
}
// Function to post a new comment
postComment(id) {
  this.disableCommentForm(); // Disable form while saving comment to database
  this.processing = true; // Lock buttons while saving comment to database
  const comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
  // Function to save the comment to the database
  this.service.postCommentQuestion(id, comment).subscribe(data => {
    this.getAllBlogs(); // Refresh all blogs to reflect the new comment
    const index = this.newComment.indexOf(id); // Get the index of the blog id to remove from array
    this.newComment.splice(index, 1); // Remove id from the array
    this.enableCommentForm(); // Re-enable the form
    this.commentForm.reset(); // Reset the comment form
    this.processing = false; // Unlock buttons on comment form
    // if (this.enabledComments.indexOf(id) < 0) this.expand(id); // Expand comments for user on comment submission
  });
}

// Expand the list of comments
expand(id) {
  this.enabledComments.push(id); // Add the current blog post id to array
}

// Collapse the list of comments
collapse(id) {
  const index = this.enabledComments.indexOf(id); // Get position of id in array
  this.enabledComments.splice(index, 1); // Remove id from array
}


}