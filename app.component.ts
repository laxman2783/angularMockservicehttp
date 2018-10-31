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
    url = 'http://localhost:3000/posts';
somethingsomething:any;
loading:boolean=false;;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
  //  console.log("in getAll");
    //return this.http.get(this.url + '?_sort=id&_order=desc')
      //.map(response => response);
 this.http.get(this.url + '?_sort=id&_order=desc',{reportProgress: true, observe: 'events'}).subscribe((res)=>{
        console.log(res);
          console.log(res.type);
          console.log(res.loaded);
            if (res.type === HttpEventType.Response) {
                this.loading=true;
  }
    });
  }
}
