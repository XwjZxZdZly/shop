import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/Rx";

@Injectable()
export class ProductsService {

  constructor(private http:Http) {}
  

  getComment():Observable<Comment[]>{
    return this.http.get("http://10.7.183.57:3000/getComment").map(res=>res.json())
  }

  getHome():Observable<Banner[]>{
    return this.http.get("http://10.7.183.57:3000/getHome").map(res=>res.json())
  }
  
}

export class Comment{
  constructor(
    public id:number,
    public name:string,
    public goodsname:string,
    public thumbsrc:Array<string>,
    public imgsrc:Array<string>,
    public city:string,
    public comment:Array<string>
  ){

  }
}

export class Banner{
  constructor(
    public id:number,
    public img:string,
  ){

  }
}