import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.data);
  }
}
