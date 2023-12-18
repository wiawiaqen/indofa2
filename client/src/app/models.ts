export class Product {
  productID: string;
  productTitle: string;
  productDescription: string;
  productImgSource: string;
  productPrice: number | string;
  productDiscountPrice: number | string;
  productFullDescription: string;
  productFullImgSource: string;
  productCategory: string;
  productActive: boolean;
  constructor(data: any = { "name": "test", "description": "test", "imgbase64": "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", "price": 10000, "d_price": 10000, "f_description": "test", "f_imgbase64": "test", "category": "test", "isActive": true }, productTitle: string = 'Hạt giống rau muống INDOFA', productImgSource: string = 'test.png', productPrice: number | string = 10000) {
    this.productID = data._id;
    this.productTitle = data.name || "";
    this.productDescription = data.description || "";
    this.productImgSource = data.imgbase64 || "";
    this.productPrice = this.numberWithCommas(data.price) || 0;
    this.productDiscountPrice = this.numberWithCommas(data.d_price) || 0;
    this.productFullDescription = data.f_description || "";
    this.productFullImgSource = data.f_imgbase64 || "";
    this.productCategory = data.category || "";
    this.productActive = data.isActive || true;
  }
  numberWithCommas(x: number | string) {
    try {
      var parts = x.toString().split(",");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    } catch (e) {
      return x;
    }
  }
  processPlantingInstructions(): Record<string, string[]> {
    const lines = this.productFullDescription.split('\n');
    const result: Record<string, string[]> = {};
    let currentKey = '';

    for (let line of lines) {
      line = line.trim();
      if (line === '') continue;

      if (line.startsWith('+')) {
        if (currentKey) {
          if (!result[currentKey]) {
            result[currentKey] = [];
          }
          result[currentKey].push(line.substring(1).trim());
        }
      } else {
        currentKey = line;
      }
    }

    return result;
  }

}

export class Review {
  reviewer: string;
  date: Date;
  rating: number;
  title: string;
  content: string;

  constructor(data: any = {}) {
    this.reviewer = data.reviewer;
    this.date = data.date ? new Date(data.date) : new Date();
    this.rating = data.rating;
    this.title = data.title;
    this.content = data.content;
  }
}

export class Order {
  userID: string;
  products: { productID: string, quantity: number }[];
  couponID: string;
  total: number;
  status: 'pending' | 'completed';

  constructor(data: any = {}) {
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
  code: string;
  type: 'percent' | 'fixed';
  discount: number;
  status: 'active' | 'inactive';

  constructor(data: any = {}) {
    this.code = data.code;
    this.type = data.type;
    this.discount = data.discount;
    this.status = data.status;
  }
}


export class Cart {
  userID: string;
  products: { productID: string, quantity: number }[];
  total: number;
  status: 'pending' | 'completed';

  constructor(data: any = {}) {
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
  title: string;
  content: Array<{ contentTitle: string, contentBody: string, base64Img?: string }>;

  constructor(data: any = {}) {
    this.title = data.title;
    this.content = data.content ? data.content.map((c: any) => ({
      contentTitle: c.content_title,
      contentBody: c.content_body,
      base64Img: c.base64_img
    })) : [];
  }
}

export class Address {
  street: string;
  city: string;
  district: string;
  ward: string;
  userID: string;
  isDefault: boolean;

  constructor(data: any = {}) {
    this.street = data.street;
    this.city = data.city;
    this.district = data.district;
    this.ward = data.ward;
    this.userID = data.user;
    this.isDefault = data.default !== undefined ? data.default : false;
  }
}

export class User {
  name: string;
  email: string;
  provider: 'google' | 'indofa';
  role: 'user' | 'admin';
  isActive: boolean;

  constructor(data: any = {}) {
    this.name = data.name;
    this.email = data.email;
    this.provider = data.provider;
    this.role = data.role;
    this.isActive = data.isActive !== undefined ? data.isActive : true;
  }
}
