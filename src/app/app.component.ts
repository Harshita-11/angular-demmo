import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-demmo';
  productData: Array<any>;
  categoryData: Array<any>;
  mappedArr: Array<any>;

  constructor(private _productService: ProductServiceService) {}

  ngOnInit(): void {
    this.getProductCards();
    this.productData = [];
    this.categoryData = [];
    this.mappedArr = [];
  }

  getProductCards(): void {
    this._productService.getProduct()
      .subscribe((res) => {
        this.productData = res.products;
        this.categoryData = res.categories;
        this.mappedProduct();
      })
  }
  
  mappedProduct() {
    this.productData.map((item) => {
      this.mappedArr.push({
        name: item.name,
        price: item.price
      })
    });
    console.log('&', this.mappedArr);
  }
}
