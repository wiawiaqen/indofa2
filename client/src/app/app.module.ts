
import { NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

//import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule, Routes } from '@angular/router';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductCategoryContainerComponent } from './product-category-container/product-category-container.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogcategoryComponent } from './blogcategory/blogcategory.component';
import { BlogComponent } from './blog/blog.component';
import { HomePageComponent } from './home-page/home-page.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
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
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';
import { PaymentComponent } from './payment/payment.component';

import { BlogAddComponent } from './admin/blog-add/blog-add.component';
import { BlogListComponent } from './admin/blog-list/blog-list.component';
import { BlogUpdateComponent } from './admin/blog-update/blog-update.component';
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
  {path: 'payment', component: PaymentComponent},
  {path: 'admin-product-add', component: ProductAddComponent},
  {path: 'admin-product-list', component: ProductListComponent},
  {path: 'admin-product-update/:id', component: ProductUpdateComponent}
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
    PaymentComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,

    BlogAddComponent,
    BlogListComponent,
    BlogUpdateComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }

