import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Coupon } from 'src/app/models';
@Component({
  selector: 'app-product-add',

  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  myForm: FormGroup;
  coupons = [
    { code: 'WASK21QX' },
    { code: 'CQD4MZVU' },
    { code: '3Z3WZCW2' },
    { code: 'TTQEM2KZ' }
  ];
  
  constructor(private service: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  productForm: FormGroup;
  files: File[] = [];
  files1: File[] = [];
  
  imgbase64: string | ArrayBuffer | null = '';
  f_imgbase64: string | ArrayBuffer | null = '';
  fb = inject(FormBuilder)
  ngOnInit(): void{
    this.productForm  = this.formBuilder.group({
      name: '',
      cate: '',
      price:'',
      info:'',
      desc:'',
      
     
    })
    this.myForm = this.fb.group({
      coupon: [''],
      price: [0],
      discountAmount: [0],
      discountedPrice: [0]
    });
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
      let formData = this.productForm.getRawValue()
      this.f_imgbase64 = reader.result
      let data = {
        name: formData.name,
        category:formData.cate,
        description: formData.desc,
        information: formData.info,
        imgbase64: String(this.imgbase64),
        f_imgbase64: String(this.f_imgbase64),
        price: formData.price,
        f_description: "test"
      }
      console.log(formData)
      console.log(formData.name)
      this.service.postProduct(data).subscribe({
        next: (data) => {
        },
        error: (err) => {
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

  async postProduct() {
    this.handlePost(this.files[0], this.files1[0])
  }
  updateDiscount() {
    // Check if myForm is not null before accessing its properties
    if (this.myForm) {
      const discountPercentage = 0.1; // 10% discount for demonstration
      const currentPrice = this.myForm.get('price')?.value; // Optional chaining here

      if (currentPrice !== null && currentPrice !== undefined) {
        this.myForm.patchValue({
          discountAmount: currentPrice * discountPercentage,
          discountedPrice: currentPrice - (currentPrice * discountPercentage)
        });
      }
    }
  }
}