import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class CategoryAddComponent {
  myForm: FormGroup;

export class ProductAddComponent {
 
  showInput = false;
  constructor(private service: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { this.myForm = this.fb.group({
    mySelect: [''],
    newOption: ['', Validators.required]
  }) }

  myForm: FormGroup;
  files: File[] = [];
  files1: File[] = [];

  imgbase64: string | ArrayBuffer | null = '';
  f_imgbase64: string | ArrayBuffer | null = '';
  fb = inject(FormBuilder)
  ngOnInit(): void{
    this.myForm = this.formBuilder.group({
      name: '',
      cate: '',
      price: '',
      fdesc: '',
      desc: ''
    });
    
  }
 
  
  
  hienInput() {
    this.showInput = true;
  }
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
  async handlePost(img: File, f_img: File) {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      this.imgbase64 = reader.result
    }
    const reader2 = new FileReader();
    reader2.readAsDataURL(f_img);
    reader2.onload = () => {
      // Have to wait the file finished loading
      let formData = this.myForm.getRawValue()
      this.f_imgbase64 = reader2.result;
      let data = {
        name: formData.name,
        category:formData.cate,
        description: formData.desc,
        imgbase64: String(this.imgbase64),
        f_imgbase64: String(this.f_imgbase64),
        price: formData.price,
        f_description: formData.fdesc
      }
      console.log(formData)
      console.log(formData.name)
      this.service.postProduct(data).subscribe({
        next: (data: any) => {
        },
        error: (err: any) => {
          this.errMessage = err;
        },
      });
    }
  }
  product = new Product();
  errMessage: string = '';
  public setProduct(p: Product) {
    this.product = p;
  }

  async postProduct(event: Event): Promise<void> {
    event.preventDefault();
    this.handlePost(this.files[0], this.files1[0]);
  }
}
