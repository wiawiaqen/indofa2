import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../service/searchbar.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {


  products: Product[] = [];
  hasQuery: boolean = false;

  constructor(private search: SearchbarService) {} 
 
  sendData(event: any) {
    let query: string= event.target.value
    let matchSpaces: any = query.match(/\s*/)
    if(matchSpaces[0] === query){
      this.products= [];
      this.hasQuery = false;
      return
    }
    this.search.searchProducts(query.trim()).subscribe(results => {
      this.products = results
      this.hasQuery = true;
      console.log(results)
    })
  

  }}