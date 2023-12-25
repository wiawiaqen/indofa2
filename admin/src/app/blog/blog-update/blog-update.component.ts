import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrl: './blog-update.component.css'
})
export class BlogUpdateComponent {
 
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  files: File[] = [];
  files1: File[] = [];
  
  imgbase64: string | ArrayBuffer | null = '';
  f_imgbase64: string | ArrayBuffer | null = '';
  fb = inject(FormBuilder)
  
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onSelect1(event: any) {
    console.log(event);
    this.files1.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onRemove1(event: any) {
    console.log(event);
    this.files1.splice(this.files.indexOf(event), 1);
  }
}
