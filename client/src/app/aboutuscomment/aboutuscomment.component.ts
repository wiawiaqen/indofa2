import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aboutuscomment',
  templateUrl: './aboutuscomment.component.html',
  styleUrls: ['./aboutuscomment.component.css']
})
export class AboutuscommentComponent {
  @Input() content: string = '';
  @Input() name: string='';
  @Input() place: string='';
}
