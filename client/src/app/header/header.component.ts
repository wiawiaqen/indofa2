import { Component, HostListener, ElementRef } from '@angular/core';
import { SearchbarService } from '../services/searchbar.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Product } from '../models';
import { ModalService } from '../services/modal.service';
import { AddressService } from '../services/address.service';
import { AuthService } from '../services/auth.service';
import { User } from '../models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isModalOpen: boolean = false;
  showCart: boolean = false;
  input: string = ''
  products: Product[] = [];
  user: User | null = null;
  hasQuery: boolean = false;
  componentToLoad: any = null;
  isFixed: boolean = false;
  offset: number = 0;


  constructor(private search: SearchbarService,
    private modalService: ModalService,
    private addressService: AddressService,
    private el: ElementRef,
    private authService: AuthService
  ) {
    this.modalService.onClose.subscribe(() => {
      this.closeModal();
      this.closeCart();
    })
    this.modalService.onOpen.subscribe(() => {
      this.openCart()
    });
  }

  ngOnInit() {
    this.getUser();
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

  getUser() {
    this.authService.checkUser().subscribe(data => {
      this.user = new User(data['data']);
    });
  }
  logOut(){
    this.authService.logOut().subscribe(data => {
      this.user = null;
    });
  }
  closeCart() {
    this.showCart = false;
    this.getUser();
  }
  openCart() {
    this.showCart = true;
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
