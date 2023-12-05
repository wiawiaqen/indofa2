import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-review',
  templateUrl: './about-us-review.component.html',
  styleUrls: ['./about-us-review.component.css']
})
export class AboutUsReviewComponent {
  @Input() content: string = '';
  @Input() name: string='';
  @Input() place: string='';
  // write function to encode the img url to base64
}
