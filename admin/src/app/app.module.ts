import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogUpdateComponent } from './blog/blog-update/blog-update.component';
import { LoginComponent } from './login/login/login.component';
import { CouponComponent } from './coupon/coupon.component';
import { NewCouponComponent } from './new-coupon/new-coupon.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';


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
    CouponComponent,
    NewCouponComponent,
    LeftMenuComponent,
    
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
