import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";

import {Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { SaleComponent } from './sale/sale.component';
import { MineComponent } from './mine/mine.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyCollectComponent } from './my-collect/my-collect.component';
import { MyPublishComponent } from './my-publish/my-publish.component';
import { MyMsgComponent } from './my-msg/my-msg.component';
import { VersionComponent } from './version/version.component';
import { BarsComponent } from './bars/bars.component';

const routes:Routes = [
  {path:"",component:IndexComponent,children:[
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"buy",component:BuyComponent},
    {path:"sale",component:SaleComponent},
    {path:"mine",component:MineComponent}  
  ]},
  {path:"detail",component:DetailComponent},
  {path:"order",component:OrderComponent},
  {path:"mycart",component:MyCartComponent},
  {path:"mypublish",component:MyCollectComponent},
  {path:"mycollection",component:MyPublishComponent},
  {path:"mymsg",component:MyMsgComponent},
  {path:"version",component:VersionComponent},
  
  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyComponent,
    SaleComponent,
    MineComponent,
    IndexComponent,
    DetailComponent,
    OrderComponent,
    MycartComponent,
    MypublishComponent,
    MycollectComponent,
    MyCartComponent,
    MyCollectComponent,
    MyPublishComponent,
    MyMsgComponent,
    VersionComponent,
    BarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
