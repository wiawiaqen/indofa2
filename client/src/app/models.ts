export class Product {
  productTitle: string;
  productImgSource: string;
  productPrice: number | string;
  constructor(productTitle: string = 'Hạt giống rau muống INDOFA', productImgSource: string = 'test.png', productPrice: number | string = 10000) {
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
