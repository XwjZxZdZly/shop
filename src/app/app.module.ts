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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CateComponent } from './cate/cate.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


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
  {path:"myinfo",component:MyInfoComponent},
  {path:"mycart",component:MyCartComponent},
  {path:"mypublish",component:MyCollectComponent},
  {path:"mycollection",component:MyPublishComponent},
  {path:"mymsg",component:MyMsgComponent},
  {path:"version",component:VersionComponent},
  {path:"cate",component:CateComponent}
  
  

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
    MyCartComponent,
    MyCollectComponent,
    MyPublishComponent,
    MyMsgComponent,
    VersionComponent,
    BarsComponent,
    FooterComponent,
    HeaderComponent,
    MyInfoComponent,
    CartItemComponent,
    CateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
