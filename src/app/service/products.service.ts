import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public num:number
  ){}
}