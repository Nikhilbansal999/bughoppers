import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { tap, startWith, debounceTime, switchMap, map,endWith } from 'rxjs/operators';
import { ApiconnectionService } from '../apiconnection.service';
import { ReselitemshowinhomeService } from '../reselitemshowinhome.service';

@Component({
  selector: 'app-testingcode',
  templateUrl: './testingcode.component.html',
  styleUrls: ['./testingcode.component.css']
})
export class TestingcodeComponent implements OnInit {

  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<any[]>;

  constructor(private service: ApiconnectionService,public reselling:ReselitemshowinhomeService) { }
  url;
  photo;
  image;
  readUrl(event:any) {
    if (event.target.files ) {
      var file=event.target.files[0];  
      var reader = new FileReader();

        reader.onload = (event:any) => {
          this.photo=reader.result;
          this.reselling.image=this.photo
            this.url = event.target.result;
            // console.log(this.photo);
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}
    slashIndex;
    semiColonIndex;
    commaIndex;
    imageurl;
    ext;

x;

form:FormGroup;
  ngOnInit() {
    
  this.form=new FormGroup({
    name:new FormControl('',[Validators.required]),//nameValidator(/nikhil/)]),
  price:new FormControl("",[Validators.required]),
  password:new FormControl("",Validators.required),
  password1:new FormControl("",Validators.required),
  mobile:new FormControl("",[Validators.required])
    }); 

  }

  pushSubsc()
  {

  }

  get name()
  {  return this.form.get('name'); }
  get username()
  { return this.form.get('username');  }
  get price() 
  { return this.form.get('price');  }
  get password()
  { return this.form.get('password'); }
  get password1()
  { return this.form.get('password1');  }
  get mobile()
  { return this.form.get('mobile'); }
detail;
increase=0;
ctr=0;
sellingDetails:any=[];

  on(d1,d2)
  {
    
    
      this.image=this.reselling.image;
      for(var x=0;x<this.image.length;x++)
      {
       if(this.image[x]=="/") { this.slashIndex=x;}  
       if(this.image[x]==";"){this.semiColonIndex=x;}
        if(this.image[x]==","){this.commaIndex=x;break;}
      }
      
      this.imageurl=this.image.slice(this.commaIndex);
      this.ext=this.image.substring(this.slashIndex+1,this.semiColonIndex);
      let name="product_image"+this.ctr;
      console.log(name);
      this.ctr++;
      
this.detail=localStorage.getItem("email");
      this.service.reselItem(d1.value,d2.value,this.detail,this.increase,this.imageurl,this.ext,name).subscribe((res=>{
        this.sellingDetails=res;
      }))
        
  }
}
