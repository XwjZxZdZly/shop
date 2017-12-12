import { Component, OnInit  ,Input} from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
@Input()
cate:Array<Cate>

  constructor() { }

  ngOnInit() {
    console.log(this.cate)
  }

}

export class Cate{
  constructor(
    icon:string,
    title:string,
    path:string
  ){}
}