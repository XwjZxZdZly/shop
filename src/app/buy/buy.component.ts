import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"
import { Observable } from 'rxjs';
import { ProductsService } from '../service/products.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
  providers:[ProductsService]
})
export class BuyComponent implements OnInit {

  private data:any=[]


  constructor(private http:Http,private productsService:ProductsService) {

  }

  ngOnInit() {
    this.productsService.getProduct()
      .subscribe(function(){
        this.banner
      })
  }

}
