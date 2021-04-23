import { Component, OnInit } from '@angular/core';
import { ApiconnectionService } from '../apiconnection.service';
import { ReselitemshowinhomeService } from '../reselitemshowinhome.service';
import {HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-testing2',
  templateUrl:'./testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {
loading=true
  constructor(private service:ApiconnectionService,private reselling:ReselitemshowinhomeService,private http:HttpClient) {
    this.service.fetchresel(localStorage.getItem('email')).subscribe((res)=>{
      this.loading=false;
        this.reselData=res;
        // console.log(this.reselData);
        // this.image=res['buffer'];
        
        for(var i=0;i<this.reselData.length;i++)
        {
          // console.log(this.reselData[i]);
          this.p=this.reselData[i].ext;
          let title=this.reselData[i].title;
          let price=this.reselData[i].price;
          let id=this.reselData[i]._id;
          let category=this.reselData[i].category;
          let image=this.reselData[i].imageName;
          console.log()
          this.service.getImage(this.reselData[i].imageName,this.reselData[i].ext).subscribe((res)=>{
            this.gif=res;
            // console.log(this.gif);
            // console.log('data:image/'+this.p+';base64,'+this.gif.buffer.image);
            this.image_data_final.push('data:image/'+this.p+';base64,'+this.gif.buffer.image);
            let ct=0;
            for(let j=0;j<this.cart.length;j++){
              if(this.cart[j].id==id){
                this.finalData.push({               'item':title,
                  'price':price,
                  'category':category,
                  'id':id,
                  'image':'data:image/'+this.p+';base64,'+this.gif.buffer.image,
                  
                });
                ct=1;
                break;
              }
            
            }
            if(ct==0){
              this.finalData.push({
                'item':title,
                'price':price,
                'category':category,
                'id':id,
                'image':'data:image/'+this.p+';base64,'+this.gif.buffer.image,
                'counter':0
              });
            }
              
          });
        }
        console.log(this.reselData);
        console.log(this.image_data_final);
        console.log(this.finalData);
        // this.attach();
      });
        
    // }
   }


   reseldata;
   x;
   d;
   reselData;
   CData={};
 finalData:any=[];
 image:any=[];
 counter=0;
 cart:any=[];
 photo;
 p;
 g;
 img:any=[];
 real:any=[];
 gif:any=[];
 image_data_final:any=[];
 title = 'fileUpload';
  images;
  multipleImages = [];
  ngOnInit(): void {
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
