
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppComponent } from './app.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductCategoryContainerComponent } from './product-category-container/product-category-container.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogcategoryComponent } from './blogcategory/blogcategory.component';
import { BlogComponent } from './blog/blog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { AboutUsRealComponent } from './about-us-real/about-us-real.component';
import { AboutuscommentComponent } from './aboutuscomment/aboutuscomment.component';
import { AboutUsTeamComponent } from './aboutusteam/aboutusteam.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusreviewComponent } from './aboutusreview/aboutusreview.component';
import { CartComponent } from './cart/cart.component';
import { CouponComponent } from './coupon/coupon.component';
import { CouponvalueComponent } from './couponvalue/couponvalue.component';
import { SuccessorderComponent } from './successorder/successorder.component';
import { CartnoproductsComponent } from './cartnoproducts/cartnoproducts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoaderComponent } from './loader/loader.component';
import { BlogSmallComponent } from './blog-small/blog-small.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { BottommenublogComponent } from './bottommenublog/bottommenublog.component';
import { ProductTotalComponent } from './product-total/product-total.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ForgotPwAfterComponent } from './forgot-pw-after/forgot-pw-after.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LoginAdComponent } from './admin/login-ad/login-ad.component';
import { ResetpsAdComponent } from './admin/resetps-ad/resetps-ad.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { OrderDetailAdComponent } from './admin/order-detail/order-detail-ad.component';

import { register } from 'swiper/element/bundle';
register();
import { CategoryAddComponent } from './admin/category-add/category-add.component';
import { BlogAddComponent } from './admin/blog-add/blog-add.component';
import { BlogListComponent } from './admin/blog-list/blog-list.component';
import { BlogUpdateComponent } from './admin/blog-update/blog-update.component';
import { ModalComponent } from './modal/modal.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutusreal', component: AboutUsRealComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'coupon', component: CouponComponent },
  { path: 'successorder', component: SuccessorderComponent },
  { path: 'cartnoproducts', component: CartnoproductsComponent },
  { path: 'loader', component: LoaderComponent },
  { path: "**", component: NotfoundComponent },
  { path: 'blogcategory', component: BlogcategoryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'prodtotal', component: ProductTotalComponent },
  { path: 'prodtotal/:category', component:ProductTotalComponent },
  { path: 'prodtotal/:category/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPwComponent },
  { path: 'reset/:token', component: ResetpwComponent },
  { path: 'forgot-password-after/:email', component: ForgotPwAfterComponent },
  { path: 'profile', component: ProfileComponent},
  {path: 'up-profile', component:UpdateProfileComponent },
  {path: 'ord-detail', component:OrderDetailComponent},
  { path: 'admin-product-add', component: ProductAddComponent },
  { path: 'admin-product-list', component: ProductListComponent },
  { path: 'admin-product-update/:id', component: ProductUpdateComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductMainComponent,
    ProductCategoryContainerComponent,
    BlogMainComponent,
    LoginComponent,
    BlogsComponent,
    BlogcategoryComponent,
    BlogComponent,
    RegisterComponent,
    NavComponent,
    ForgotPwComponent,
    ResetpwComponent,
    HomePageComponent,
    AboutUsRealComponent,
    AboutuscommentComponent,
    AboutUsTeamComponent,
    AboutusreviewComponent,
    CartComponent,
    CouponComponent,
    CouponvalueComponent,
    SuccessorderComponent,
    CartnoproductsComponent,
    NotfoundComponent,
    LoaderComponent,
    BlogSmallComponent,
    LeftmenuComponent,
    BottommenublogComponent,
    HeaderComponent,
    FooterComponent,
    ProductTotalComponent,
    ProductDetailComponent,
    ForgotPwAfterComponent,
    ProfileComponent,
    UpdateProfileComponent,
    OrderDetailComponent,
    LoginAdComponent,
    ResetpsAdComponent,
    OrderListComponent,
    OrderDetailAdComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,
    CategoryAddComponent,
    BlogAddComponent,
    BlogListComponent,
    BlogUpdateComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDropzoneModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }

