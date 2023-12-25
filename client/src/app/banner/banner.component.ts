import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  banners = [
    { name: 'Banner_chung.png' },
    { name: 'Banner_hatgiong.png' },
    { name: 'Banner_dungcu.png' },
    { name: 'Banner_datgiathe.png' }
  ]
}
