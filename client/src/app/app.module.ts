
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
import { AboutUsPotsComponent } from './about-us-pots/about-us-pots.component';
import { AboutUsMemberComponent } from './about-us-member/about-us-member.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsReviewComponent } from './about-us-review/about-us-review.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http'
import { NavComponent } from './nav/nav.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'blog', component: BlogsComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPwComponent},
  {path: 'reset/:token', component: ResetpwComponent}
  
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
    AboutUsPotsComponent,
    AboutUsMemberComponent,
    AboutUsComponent,
    AboutUsReviewComponent,
    HomePageComponent,
    RegisterComponent,
    NavComponent,
    ForgotPwComponent,
    ResetpwComponent
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

