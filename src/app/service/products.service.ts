import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/Rx";

@Injectable()
export class ProductsService {

<<<<<<< HEAD
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
=======
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
>>>>>>> e3766d332d1a27d37e886700d745689edda470ab
}