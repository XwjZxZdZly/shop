import { Product } from './../service/products.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
@Input()
product:Array<Product>
  constructor() { }

  ngOnInit() {
  }

}

