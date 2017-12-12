import { Cate } from './../bars/bars.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
  private cates:Array<Cate>=[
    {
      title:"我的订单",
      icon:"\ue606"
    },{
      title:"我发布的",
      icon:"\ue6f5"
    },
    {
      title:"我的购物车",
      icon:"\ue652;"
    },
    {
      title:"我的消息",
      icon:"\ue6ab"
    },
    {
      title:"我的红包",
      icon:"\ue784"
    },
  ]
  constructor() { }
  
  ngOnInit() {
    console.log(this.cates)
  }

}
