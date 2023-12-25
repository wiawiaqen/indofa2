import { Component, HostListener, ElementRef } from '@angular/core';
import { SearchbarService } from '../service/searchbar.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Product } from '../models';
import { ModalService } from '../services/modal.service';
import { AddressService } from '../services/address.service';
import { offset } from '@popperjs/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isModalOpen: boolean = false;
  input: string = ''
  products: Product[] = [];
  hasQuery: boolean = false;
  componentToLoad: any = null;
  isFixed: boolean = false;
  offset: number = 0;


  constructor(private search: SearchbarService,
    private modalService: ModalService,
    private addressService: AddressService,
    private el: ElementRef
  ) {
    this.modalService.onClose.subscribe(() => this.closeModal())
  }

  ngOnInit() {
    this.addressService.getAddress().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.search.searchProducts('').subscribe(
      data => {
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
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.offset = this.el.nativeElement.offsetTop;
    const offset = this.el.nativeElement.offsetTop;
    const windowScroll = window.pageYOffset;
    if (windowScroll > offset) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
  closeModal() {
    this.isModalOpen = false;
  }
  openLoginModal() {
    this.isModalOpen = true;
    this.componentToLoad = LoginComponent;
  }
  openRegisterModal() {
    this.isModalOpen = true;
    this.componentToLoad = RegisterComponent;
  }



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
