import { ProductsService,Banner } from './../service/products.service';
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"


@Component({
  selector: 'app-home.home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banner:Banner[]

  constructor(private http:Http,private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getHome()
      .subscribe(banner=>this.banner = banner)
  }

  ok(){
    console.log(this.banner)
  }
}
