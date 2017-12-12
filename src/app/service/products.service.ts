import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/Rx";

@Injectable()
export class ProductsService {

  constructor(private http:Http) {
   
  }
  getProduct():Observable<any>{
    return this.http.get("http://localhost:4396/getProduct").map(res=>res.json())
  }
}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public num:number
  ){}
}