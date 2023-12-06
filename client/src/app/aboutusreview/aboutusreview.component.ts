import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-aboutusreview',
  templateUrl: './aboutusreview.component.html',
  styleUrls: ['./aboutusreview.component.css']
})
export class AboutusreviewComponent {
  @Input() name:string = 'Văn An';
  @Input() city:string='Thành phố Hồ Chí Minh';
  @Input() stars:number=5;
  @Input() date:string='03-12-2023';
  @Input() title: string = "Xuất sắc";
  @Input() content: string = "Mình đã từng mua ở nhiều shop nhưng khi đến với Indofa mình mới cảm nhận thực sự được một không gian sống xanh. Indofa đem đến cảm giác tươi mát và giá thành rẻ hơn so với một vài nơi. Chúc Indofa ngày càng phát triển hơn nữa.";
}
