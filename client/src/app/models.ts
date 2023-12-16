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
    this.productTitle = data.name;
    this.productDescription = data.description;
    this.productImgSource = data.imgbase64;
    this.productPrice = this.numberWithCommas(data.price);
    this.productDiscountPrice = this.numberWithCommas(data.d_price);
    this.productFullDescription = data.f_description;
    this.productFullImgSource = data.f_imgbase64;
    this.productCategory = data.category;
    this.productActive = data.isActive;
  }
  numberWithCommas(x: number | string) {
    var parts = x.toString().split(",");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
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
