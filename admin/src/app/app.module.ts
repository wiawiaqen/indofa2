import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
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
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { CouponComponent } from './coupon/coupon.component';
import { NewCouponComponent } from './new-coupon/new-coupon.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

const routes: Routes = [
  { path: 'ordetail', component: OrderDetailComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-update/:id', component: ProductUpdateComponent },
  { path: 'blog-add', component: BlogAddComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: 'blog-update/:id', component: BlogUpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'coupon', component: CouponComponent },
  { path: 'new-coupon', component: NewCouponComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'product-list', pathMatch: 'full' },
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
    CouponComponent,
    NewCouponComponent,
    LeftMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    NgxDropzoneModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
