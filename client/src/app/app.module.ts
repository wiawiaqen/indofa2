
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

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutusreal', component: AboutUsRealComponent },
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
    AboutusreviewComponent
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

