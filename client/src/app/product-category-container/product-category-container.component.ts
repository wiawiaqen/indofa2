import { Component, Input } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-category-container',
  templateUrl: './product-category-container.component.html',
  styleUrls: ['./product-category-container.component.css']
})
export class ProductCategoryContainerComponent {
  @Input() container_title: string = 'HẠT GIỐNG';
  products: Product[] = [new Product(),new Product(),new Product(),new Product()];
}
