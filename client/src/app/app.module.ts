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
import { BlogSmallComponent } from './blog-small/blog-small.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { BottommenublogComponent } from './bottommenublog/bottommenublog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductTotalComponent } from './product-total/product-total.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogcategory', component: BlogcategoryComponent },
  { path: 'blog', component:BlogComponent },
  { path: 'prodtotal', component:ProductTotalComponent },
  { path: 'proddetail', component:ProductDetailComponent },
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
    BlogSmallComponent,
    LeftmenuComponent,
    BottommenublogComponent,
    HeaderComponent,
    FooterComponent,
    ProductTotalComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }