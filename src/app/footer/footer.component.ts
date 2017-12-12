import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private actIndex:number=0;
  constructor() { }

  ngOnInit() {
  }
  doActive(idx){
      this.actIndex = idx;
  }
}
