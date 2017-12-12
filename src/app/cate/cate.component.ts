import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cate.all-container',
  templateUrl: './cate.component.html',
  styleUrls: ['./cate.component.scss']
})


export class CateComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit() {


  }

  back(){
    this.router.navigate(['/buy'])
  }

}
