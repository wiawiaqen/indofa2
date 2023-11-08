import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductCategoryContainerComponent } from './product-category-container/product-category-container.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductMainComponent,
    ProductCategoryContainerComponent,
    BlogMainComponent,
    LoginComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

