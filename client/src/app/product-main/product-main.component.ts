import { Component, Input  } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent {
  @Input() product: Product = new Product();
}
