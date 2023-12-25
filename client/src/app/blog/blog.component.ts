import { Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  @Input() blog: Blog = new Blog();
  blogs: Blog[] = [];
  input: string = '';
  type: string = '';
  loading: boolean = true;
  mapping: {[key:string]: string} = {
    "space": "Không gian sống xanh cùng Indofa",
    "emotion": "Nơi khơi màu cảm xúc",
    "season":"Mùa nào cây nấy",
  }
  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val:any) => {
      this.input = val['type'];
      let data = this.input.split("-")
      this.type = data[0];
    });

    this.blogService.getFilter(this.type).subscribe(
      {
        next: (res: any) => {
          this.loading = true;
          console.log("blabla")
          res['data'].forEach(
            (blog_data: any) => {
              let blog = new Blog(blog_data)
              this.blogs.push(blog)
            }
          )
          this.loading = false;
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    )
  }

  getBlog(id: string): void {
    this.blogService.getBlog(id).subscribe({
      next: (blogDetails: any) => {
        this.blog = new Blog(blogDetails.data);
        console.log("data");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
