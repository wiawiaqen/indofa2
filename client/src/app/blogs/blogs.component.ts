import { Component, OnInit } from '@angular/core';
import { Blog } from '../models';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  season_blogs: Blog[] = [];
  season_loading = true
  emotion_blogs: Blog[] = [];
  emotion_loading = true
  space_blogs: Blog[] = [];
  space_loading = true
  constructor(
    private _service: BlogService
  ) { }
  ngOnInit(): void {
    this.handle_emotion()
    this.handle_season()
    this.handle_space()
  }
  handle_season() {
    this._service.getFilter("season").subscribe(
      {
        next: (data) => {
          this.season_blogs = []
          data['data'].forEach((blogdata: any) => {
            let blog = new Blog(blogdata);
            this.season_blogs.push(blog);
          })
          this.season_loading = false;
        }
      }
    )
  }
  handle_emotion () {
    this._service.getFilter("emotion").subscribe(
      {
        next: (data) => {
          this.emotion_blogs = []
          data['data'].forEach((blogdata: any) => {
            let blog = new Blog(blogdata);
            this.emotion_blogs.push(blog);
          })
          this.emotion_loading = false;
        }
      }
    )
  }
  handle_space () {
    this._service.getFilter("space").subscribe(
      {
        next: (data) => {
          this.space_blogs = []
          data['data'].forEach((blogdata: any) => {
            let blog = new Blog(blogdata);
            this.space_blogs.push(blog);
          })
          this.space_loading = false;
        }
      }
    )
  }
}
