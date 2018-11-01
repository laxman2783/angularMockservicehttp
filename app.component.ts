import { Component, Injectable } from '@angular/core';
import { HttpClient,HttpEventType } from '@angular/common/http';
import {Observable}from 'rxjs';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent { 
  title="mayapp";
  //  url = 'http://localhost:3000/posts?id=1&id=2';
  url='http://localhost:3000/author';
somethingsomething:any;
loading:boolean=false;
data:any;
 goodResponse = []
  constructor(private http: HttpClient) { }

  getAll() {
  //  console.log("in getAll");
    //return this.http.get(this.url + '?_sort=id&_order=desc')
      //.map(response => response);
 this.http.get(this.url + '?_sort=id&_order=desc').subscribe((res)=>{
        console.log(res);
        this.data=res;
          this.goodResponse.push(res);
      /*  for (let entry of this.data) {
                console.log('entry', entry)
                 this.goodResponse.push(entry);
            }*/
          //console.log(res.type);
         // console.log(res.loaded);
           /* if (res.type === HttpEventType.Response) {
                this.loading=true;
  }*/
    });
  }
}
