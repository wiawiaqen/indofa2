import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../service/searchbar.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {


  products: Product[] = [];
  hasQuery: boolean = false;

  constructor(private search: SearchbarService) {} 
  ngOnInit() {
    this.search.searchProducts('').subscribe(
      data => {
        this.products = data;
        console.log('Products:', this.products);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  
  sendData(event: any) {
    let query: string = event.target.value;
    let matchSpaces: any = query.match(/\s*/);

    if (matchSpaces[0] === query) {
      this.products = [];
      this.hasQuery = false;
      return;
    }

    this.search.searchProducts(query.trim()).subscribe(
      (results: Product[]) => {
        results.forEach((product) => { let productObject = new Product(product); this.products.push(productObject)})
        
        this.hasQuery = true;
        console.log('Data received from server:', this.products);
      },
      (error) => {
        console.error('Error from server:', error);
      }
    );
  }}