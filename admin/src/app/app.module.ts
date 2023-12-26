import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
import { NgxDropzoneModule } from 'ngx-dropzone';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogUpdateComponent } from './blog/blog-update/blog-update.component';
import { LoginComponent } from './login/login/login.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';

const routes: Routes = [
  { path: 'ordetail', component:  OrderDetailComponent },
  
]
@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,
    BlogAddComponent,
    BlogListComponent,
    BlogUpdateComponent,
    LoginComponent,
    OrderListComponent,
    OrderDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule ,
    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
