import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models';
import { SearchbarService } from '../../services/searchbar.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products_list: Product[] = [];
  products: Product[] = [];
  errMessage: string = '';

  constructor(public service: ProductService, public router: Router, private search: SearchbarService) {
  }

  ngOnInit() {
    this.fetchProducts();
    this.search.searchProducts('').subscribe(
      data => {
        this.products = [];
        data.forEach((product_data) => {
          let product = new Product(product_data);
          this.products.push(product);
        });
      },
      error => {
        console.error('Error:', error);
      }
    );

  }

  private fetchProducts() {
    this.service.getProducts().subscribe(
      (data) => {
        this.products_list = [];
        data['data'].forEach((product_data) => {
          let product = new Product(product_data);
          this.products_list.push(product);
        });
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );

  }
  DetailProduct(p: any) {
    this.router.navigate(['/', p._id]);
  }

  createProduct() {
    this.router.navigate(['admin-product-add']);
  }

  updateProduct(id: any) {
    this.router.navigate([`admin-product-update/${id}`]);
  }

  deleteProduct(_id: any) {
    Swal.fire({
      title: 'Tiếp tục xóa sản phẩm?',
      text: "Sản phẩm sẽ bị xóa vĩnh viễn.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tiếp tục'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProduct(_id).subscribe({
          next: (data) => {
            this.products = data;
            Swal.fire({
              title: 'Đã xóa',
              text: 'Sản phẩm đã được xóa.',
              icon: 'success'
            });
          },
          error: (err) => {
            this.errMessage = err;
            // Show error message
            Swal.fire({
              title: 'Lỗi',
              text: 'Đã xảy ra lỗi khi xóa.',
              icon: 'error'
            });
          },
        });
      }
    });
  }
  input: string = ''
  hasQuery: boolean = false;




  sendData(event: any) {

    let query: string = event.target.value;
    let matchSpaces: any = query.match(/\s*/);

    if (matchSpaces[0] === query) {

      this.hasQuery = false;
      return;
    }

    this.search.searchProducts(query.trim()).subscribe(
      (results: Product[]) => {
        this.products = [];
        results.forEach((product) => {
          let productObject = new Product(product);
          this.products.push(productObject)
        })
        this.hasQuery = true;
        console.log('Data received from server:', results);
        console.log('Products:', this.products);
      },
      (error) => {
        console.error('Error from server:', error);
      }
    );
  }
}
