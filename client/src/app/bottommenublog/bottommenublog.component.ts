import { Component, OnInit } from '@angular/core';
import { Blog } from '../models';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-bottommenublog',
  templateUrl: './bottommenublog.component.html',
  styleUrls: ['./bottommenublog.component.css']
})


export class BottommenublogComponent implements OnInit{
  blogs: Blog[] = [];
  blogs_loading = true
  constructor(
    private blogService: BlogService
  ) { }
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
      {
        next: (res: any) => {
          this.blogs = []
          res['data'].forEach((blogData:any) =>
          {
            let blog = new Blog(blogData)
            this.blogs.push(blog)
          })
          this.blogs_loading = false
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
  }
}
