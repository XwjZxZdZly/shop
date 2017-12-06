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

const routes:Routes = [
  {path:"",component:IndexComponent,children:[
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"buy",component:BuyComponent},
    {path:"sale",component:SaleComponent},
    {path:"mine",component:MineComponent}  
  ]}
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyComponent,
    SaleComponent,
    MineComponent,
    IndexComponent
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
