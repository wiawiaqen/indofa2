import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductCategoryContainerComponent } from './product-category-container/product-category-container.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { AboutUsPotsComponent } from './about-us-pots/about-us-pots.component';
import { AboutUsMemberComponent } from './about-us-member/about-us-member.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsReviewComponent } from './about-us-review/about-us-review.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductMainComponent,
    ProductCategoryContainerComponent,
    BlogMainComponent,
    AboutUsPotsComponent,
    AboutUsMemberComponent,
    AboutUsComponent,
    AboutUsReviewComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
