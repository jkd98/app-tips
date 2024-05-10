import { CurrencyPipe } from '@angular/common';
import { Component, Signal, computed } from '@angular/core';
import { OrderItem } from '../../types/types';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-totals',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.css'
})
export class OrderTotalsComponent {
  ///
  public order:Signal<OrderItem[]>;
    // Actualiza el subtotal cuando la orden cambia
  public subtotalAmount = computed( () => this.orderService.subtotalAmount() );
    // Actualiza la propina
  public tipAmount = computed(()=> this.orderService.tipAmount() );
    // Actualiza el total
  public totalAmount = computed(()=>this.orderService.totalAmount());
  ///
  constructor(private orderService:OrderService){
    this.order = orderService.orderReadonly;
  }
  ///
  handleSaveOrder(){
    this.orderService.placeOrder();
  }
}
