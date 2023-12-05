import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductCategoryContainerComponent } from './product-category-container/product-category-container.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogcategoryComponent } from './blogcategory/blogcategory.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsPotsComponent } from './about-us-pots/about-us-pots.component';
import { AboutUsMemberComponent } from './about-us-member/about-us-member.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsReviewComponent } from './about-us-review/about-us-review.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordAfterComponent } from './forgot-password-after/forgot-password-after.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPwSuccessComponent } from './reset-pw-success/reset-pw-success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductMainComponent,
    ProductCategoryContainerComponent,
    BlogMainComponent,
    BlogsComponent,
    BlogcategoryComponent,
    BlogComponent,
    AboutUsPotsComponent,
    AboutUsMemberComponent,
    AboutUsComponent,
    AboutUsReviewComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    DangkyComponent,
    DangnhapComponent,
    ForgotPasswordComponent,
    ForgotPasswordAfterComponent,
    ResetPasswordComponent,
    ResetPwSuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

