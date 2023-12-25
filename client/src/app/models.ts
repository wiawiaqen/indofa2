export class Product {
  productID: string;
  productTitle: string;
  productDescription: string;
  productImgSource: string;
  productImgReduce: string;
  productPrice: number | string;
  productDiscountPrice: number | string;
  productFullDescription: string;
  productFullImgSource: string;
  productCategory: string;
  productActive: boolean;
  constructor(data: any = { "name": "test", "description": "test", "imgbase64": "data:image/jpeg;base64,", "price": 10000, "d_price": 10000, "f_description": "test", "f_imgbase64": "test", "category": "test", "isActive": true }, productTitle: string = 'Hạt giống rau muống INDOFA', productImgSource: string = 'test.png', productPrice: number | string = 10000) {
    this.productID = data._id;
    this.productTitle = data.name;
    this.productDescription = data.description;
    this.productImgSource = data.imgbase64;
    this.productImgReduce = data.imgbase64_reduce;
    this.productPrice = this.numberWithCommas(data.price);
    this.productDiscountPrice = this.numberWithCommas(data.d_price);
    this.productFullDescription = data.f_description;
    this.productFullImgSource = data.f_imgbase64;
    this.productCategory = data.category;
    this.productActive = data.isActive;
  }
  numberWithCommas(x: number | string) {
    try {
      var parts = x.toString().split(",");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    catch (e) {
      return x
    }
  }
  processDetail(): string[] {
    console.log(this.productDescription)
    const lines = this.productDescription.split("\n")
    console.log(lines)
    let results = [];
    for (let line in lines) {
      line = line.trim();
      results.push(lines[line].replace(" - ",""))
    }
    return results
  }

    processPlantingInstructions(): { key: string, steps: string[] }[] {
      const lines = this.productFullDescription.split('\n');
      const result: { key: string, steps: string[] }[] = [];
      let currentKey = '';

      for (let line of lines) {
        line = line.trim();
        if (line === '') continue;

        if (line.startsWith('+')) {
          if (currentKey) {
            const instructionIndex = result.findIndex(item => item.key === currentKey);

            if (instructionIndex === -1) {
              result.push({ key: currentKey, steps: [line.substring(1).trim()] });
            } else {
              result[instructionIndex].steps.push(line.substring(1).trim());
            }
          }
        } else {
          currentKey = line;
        }
      }

      return result;
    }
  }
export class Review {
  reviewID: string;
  reviewer: string;
  date: Date;
  rating: number;
  title: string;
  content: string;

  constructor(data: any = {}) {
    this.reviewID = data._id;
    this.reviewer = data.reviewer;
    this.date = data.date ? new Date(data.date) : new Date();
    this.rating = data.rating;
    this.title = data.title;
    this.content = data.content;
  }
}

export class Order {
  orderID: string;
  userID: string;
  products: { productID: string, quantity: number }[];
  couponID: string;
  total: number;
  status: 'pending' | 'completed';

  constructor(data: any = {}) {
    this.orderID = data._id;
    this.userID = data.user;
    this.products = data.products ? data.products.map((p: any) => ({
      productID: p.product,
      quantity: p.quantity
    })) : [];
    this.couponID = data.coupon;
    this.total = data.total;
    this.status = data.status;
  }
}

export class blog {
  productTitle: string;
  productImgSource: string;
  date: string;
  constructor(productTitle: string = 'Top 10 những cách trang trí chậu cây tui luôn tin tưởng', productImgSource: string = 'test.png', date: string = '11/04/2022') {
    this.productTitle = productTitle;
    this.productImgSource = productImgSource;
    this.date = date;
  }
}

export class Coupon {
  couponID: string;
  code: string;
  type: 'percent' | 'fixed';
  discount: number;
  status: 'active' | 'inactive';

  constructor(data: any = {}) {
    this.couponID = data._id;
    this.code = data.code;
    this.type = data.type;
    this.discount = data.discount;
    this.status = data.status;
  }
}


export class Cart {
  cartID: string;
  userID: string;
  products: { productID: string, quantity: number }[];
  total: number;
  status: 'pending' | 'completed';

  constructor(data: any = {}) {
    this.cartID = data._id;
    this.userID = data.user;
    this.products = data.products ? data.products.map((p: any) => ({
      productID: p.product,
      quantity: p.quantity
    })) : [];
    this.total = data.total;
    this.status = data.status;
  }
}

export class Blog {
  blogID: string;
  title: string;
  content: Array<{ contentTitle: string, contentBody: string, base64Img?: string }>;

  constructor(data: any = {}) {
    this.blogID = data._id;
    this.title = data.title;
    this.content = data.content ? data.content.map((c: any) => ({
      contentTitle: c.content_title,
      contentBody: c.content_body,
      base64Img: c.base64_img
    })) : [];
  }
}

export class Address {
  addressID: string;
  name: string;
  phone: string;
  street: string;
  city: string;
  district: string;
  ward: string;
  userID: string;
  isDefault: boolean;

  constructor(data: any = {}) {
    this.addressID = data._id;
    this.name = data.name;
    this.phone = data.phone;
    this.street = data.street;
    this.city = data.city;
    this.district = data.district;
    this.ward = data.ward;
    this.userID = data.user;
    this.isDefault = data.default !== undefined ? data.default : false;
  }

  full_address(): string {
    return `${this.street}, ${this.ward}, ${this.district}, ${this.city}`;
  }
}

export class User {
  userID: string;
  name: string;
  email: string;
  provider: 'google' | 'indofa';
  role: 'user' | 'admin';
  isActive: boolean;

  constructor(data: any = {}) {
    this.userID = data._id;
    this.name = data.name;
    this.email = data.email;
    this.provider = data.provider;
    this.role = data.role;
    this.isActive = data.isActive !== undefined ? data.isActive : true;
  }
}
