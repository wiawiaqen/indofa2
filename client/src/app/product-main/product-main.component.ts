import { Component, Input } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent {
  @Input() product: Product = new Product();
}
