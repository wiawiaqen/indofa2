export class Product {
  productTitle: string;
  productImgSource: string;
  productPrice: number | string;
  constructor(productTitle: string = 'Hạt giống hoa hướng dương INDOFA', productImgSource: string = 'test.png', productPrice: number | string = 10000) {
    this.productTitle = productTitle;
    this.productImgSource = productImgSource;
    this.productPrice = this.numberWithCommas(productPrice);
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
  constructor(productTitle: string = 'Mùa nào cây nấy', productImgSource: string = 'test.png', date: string = '11/04/2022') {
    this.productTitle = productTitle;
    this.productImgSource = productImgSource;
    this.date = date;
  }
}
