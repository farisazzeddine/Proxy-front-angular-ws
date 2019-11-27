import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { AppError } from '@angular/common/common';
// import { NotFoundError } from '@angular/common/';
// import 'rxjs/Operator/catch';


@Injectable({
  providedIn: 'root'
})
export class DataService {
   
  
  constructor(private url:string, private http:HttpClient) { }
  getAll(){
return this.http.get<any[]>(this.url);
          //  .catch(this.handelError);     
  }
  create(resource){
return this.http.post(this.url, resource)
          //  .catch(this.handelError);
  }
  update(resource){
return this.http.put(this.url+'/'+resource.id, resource)
                // .catch(this.handelError);
  }
  delete(resource){
return this.http.delete(this.url+'/'+resource.id)
                // .catch(this.handelError);
  }

  // private handelError(error:Response){
  //   if(error.status === 404){
  //     return Observable.throw(new NotFoundError);
  //   }
  //   if(error.status === 400){
  //     return Observable.throw(new BadInput);
  //   }
  //   return Observable.throw(new AppError);
  // }
}
