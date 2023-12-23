import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  handleFilterClick(event: Event) {
    const target = event.target as HTMLElement;
    const status = target.getAttribute('data-status');

    const statusColumns = document.querySelectorAll('td.flex.justify-center select');
    statusColumns.forEach((column) => {
      const options = column.querySelectorAll('option');
      options.forEach((option) => {
        if (status === 'all' || option.value === status) {
          this.renderer.setStyle(option, 'display', '');
        } else {
          this.renderer.setStyle(option, 'display', 'none');
        }
      });

      const selectedOption = column.querySelector('option[selected]') as HTMLOptionElement;
      if (selectedOption && selectedOption.style.display === 'none') {
        selectedOption.selected = false;
      }
    });
  }

  ngOnInit() {}
}