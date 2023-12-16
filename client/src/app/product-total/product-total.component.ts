import { Component, Input } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-total',
  templateUrl: './product-total.component.html',
  styleUrls: ['./product-total.component.css']
})
export class ProductTotalComponent {
  @Input() product: Product = new Product();
  products: Product[] = [];
  constructor(
    private productService: ProductService
  ) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      {
        next: (res: any) => {
          this.products = res['data'];
          console.log(this.products);
          for (let i = 0; i < this.products.length; i++) {
            let product = new Product(this.products[i]);
            console.log(product.productFullDescription)
            console.log(product.processPlantingInstructions())
          }
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
  }

}
