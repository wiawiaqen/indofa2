import { Component, Input } from '@angular/core';
import { Product } from '../models';
import { blog } from '../models';
@Component({
  selector: 'app-product-category-container',
  templateUrl: './product-category-container.component.html',
  styleUrls: ['./product-category-container.component.css']
})
export class ProductCategoryContainerComponent {
  @Input() container_title: string = 'HẠT GIỐNG';
  @Input() is_blog: boolean = false;
  products: Product[] = [new Product(), new Product(), new Product(), new Product()];
  blogs: blog[] = [new blog(), new blog(), new blog()]
}
