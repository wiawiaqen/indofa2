import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-team',
  templateUrl: './aboutusteam.component.html',
  styleUrls: ['./aboutusteam.component.css']
})
export class AboutUsTeamComponent {
  @Input() name:string = 'Thý Hìn';
  @Input() fb:string='#';
  @Input() ins:string='#';
  @Input() lin:string='#';
  @Input() img_url: string = "";
}
