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

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutusreal', component: AboutUsRealComponent },
  { path: 'blog', component: BlogsComponent },
  {path:'cart',component:CartComponent},
  {path:'coupon',component:CouponComponent},
  {path:'successorder',component:SuccessorderComponent},
  {path:'cartnoproducts',component:CartnoproductsComponent},
  {path:'loader',component:LoaderComponent},
  {path:"**",component:NotfoundComponent}, 
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
    AboutUsRealComponent,
    AboutuscommentComponent,
    AboutUsTeamComponent,
    HeaderComponent,
    FooterComponent,
    AboutusreviewComponent,
    CartComponent,
    CouponComponent,
    CouponvalueComponent,
    SuccessorderComponent,
    CartnoproductsComponent,
    NotfoundComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

