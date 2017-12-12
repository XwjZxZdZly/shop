import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"
import { Observable } from 'rxjs';
import { ProductsService,Comment } from '../service/products.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  comment:Comment[]

  constructor(private http:Http,private productsService:ProductsService) {}

  ngOnInit() {
    this.productsService.getComment()
      .subscribe(comment=>this.comment = comment)
  }

}
