import { Component, Signal } from '@angular/core';
import type { OrderItem } from '../../types/types';
import { OrderService } from '../../services/order.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-content',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order-content.component.html',
  styleUrl: './order-content.component.css'
})
export class OrderContentComponent {
  ///
  public order:Signal<OrderItem[]>;
  ///
  constructor(
    private orderService:OrderService
  ){
    this.order = orderService.orderReadonly;
  }
  ///
  handleRemoveItem(id:OrderItem['id']){
    this.orderService.removeItemToOrder(id);
  }

}
