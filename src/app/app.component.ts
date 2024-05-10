import { Component, OnInit, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { menuItems } from './data/data';
import { MenuItems } from './types/types';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { OrderContentComponent } from './components/order-content/order-content.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { TipPercentageFormComponent } from './components/tip-percentage-form/tip-percentage-form.component';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuItemComponent,OrderContentComponent,OrderTotalsComponent,TipPercentageFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public menuItemsList:Array<MenuItems>;
  public orders = computed(()=>this.orderService.orderReadonly().length);
  constructor(private orderService:OrderService){
    this.menuItemsList = menuItems;
  }
  ngOnInit(): void {
  }
}
