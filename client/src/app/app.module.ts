
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
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
=======
import { PaymentComponent } from './payment/payment.component';
>>>>>>> 4d787d5343e2141f3757a80ff1eb566df20c71c0

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
<<<<<<< HEAD
  {path: 'profile', component: ProfileComponent},
  {path: 'up-profile', component:UpdateProfileComponent},
  {path: 'ord-detail', component:OrderDetailComponent}
=======
  {path: 'payment', component: PaymentComponent},
>>>>>>> 4d787d5343e2141f3757a80ff1eb566df20c71c0

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
<<<<<<< HEAD
    ProfileComponent,
    UpdateProfileComponent,
    OrderDetailComponent,
=======
    PaymentComponent,
>>>>>>> 4d787d5343e2141f3757a80ff1eb566df20c71c0
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

