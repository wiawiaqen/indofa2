import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-member',
  templateUrl: './about-us-member.component.html',
  styleUrls: ['./about-us-member.component.css']
})
export class AboutUsMemberComponent {
  @Input() name:string = 'Thý Hìn';
  @Input() fb:string='#';
  @Input() ins:string='#';
  @Input() lin:string='#';
}
