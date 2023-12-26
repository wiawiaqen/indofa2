import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../models';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  constructor(private renderer: Renderer2,private http: HttpClient) {}
  orders: Order[] = [];
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

  ngOnInit() {
    this.http.get("api/orders/").subscribe((data: any) => {
      data.forEach((order: any) => {
        this.orders.push(new Order(order));
      });
    }
    );
  }
}
