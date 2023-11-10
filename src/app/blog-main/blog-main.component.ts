import { Component } from '@angular/core';
import { blog } from '../models';
@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent {
  blog: blog = new blog()
}
