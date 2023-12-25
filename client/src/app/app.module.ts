
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductCategoryContainerComponent } from './product-category-container/product-category-container.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogcategoryComponent } from './blogcategory/blogcategory.component';
import { BlogComponent } from './blog/blog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http'
import { NavComponent } from './nav/nav.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { AboutUsRealComponent } from './about-us-real/about-us-real.component';
import { AboutuscommentComponent } from './aboutuscomment/aboutuscomment.component';
import { AboutUsTeamComponent } from './aboutusteam/aboutusteam.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusreviewComponent } from './aboutusreview/aboutusreview.component';
import { BlogSmallComponent } from './blog-small/blog-small.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { BottommenublogComponent } from './bottommenublog/bottommenublog.component';
import { ProductTotalComponent } from './product-total/product-total.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ForgotPwAfterComponent } from './forgot-pw-after/forgot-pw-after.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentproductsComponent } from './paymentproducts/paymentproducts.component';
import { PaymentmethodsComponent } from './paymentmethods/paymentmethods.component';
import { ChangeaddressComponent } from './changeaddress/changeaddress.component';
import { CusaddressComponent} from './cusaddress/cusaddress.component';
import { AddressService } from 'src/app/address.service';
import { SaveChangeAddressComponent } from './save-change-address/save-change-address.component';
import { CouponComponent } from './coupon/coupon.component';
import { CouponvalueComponent } from './couponvalue/couponvalue.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutusreal', component: AboutUsRealComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogcategory', component: BlogcategoryComponent },
  { path: 'blog', component:BlogComponent },
  { path: 'prodtotal', component:ProductTotalComponent },
  { path: 'proddetail', component:ProductDetailComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPwComponent},
  {path: 'reset/:token', component: ResetpwComponent},
  {path: 'forgot-password-after/:email', component: ForgotPwAfterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'payment', component: PaymentComponent},
  {path:'paymentproducts', component: PaymentproductsComponent},
  {path:'paymentmethods', component: PaymentmethodsComponent},
  {path:'changeaddress', component: ChangeaddressComponent},
  {path:'cusaddress', component: CusaddressComponent},
  { path: 'payment/:selectedAddress', component: PaymentComponent},
  {path: 'save-change-address', component: SaveChangeAddressComponent},
  {path: 'coupon', component: CouponComponent},

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
    HomePageComponent,
    RegisterComponent,
    NavComponent,
    ForgotPwComponent,
    ResetpwComponent,
    HomePageComponent,
    AboutUsRealComponent,
    AboutuscommentComponent,
    AboutUsTeamComponent,
    HeaderComponent,
    FooterComponent,
    AboutusreviewComponent,
    BlogSmallComponent,
    LeftmenuComponent,
    BottommenublogComponent,
    HeaderComponent,
    FooterComponent,
    ProductTotalComponent,
    ProductDetailComponent,
    ForgotPwAfterComponent,
    CartComponent,
    PaymentComponent,
    PaymentproductsComponent,
    PaymentmethodsComponent,
    ChangeaddressComponent,
    CusaddressComponent,
    SaveChangeAddressComponent,
    CouponComponent,
    CouponvalueComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AddressService, // Add the service to the providers array
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

