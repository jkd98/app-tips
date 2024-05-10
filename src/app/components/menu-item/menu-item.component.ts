import { Component, Input, OnInit } from '@angular/core';
import type { MenuItems } from '../../types/types';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})


export class MenuItemComponent implements OnInit{
  ///
  @Input('menuItem') menuItem:MenuItems;
  ///
  constructor(private orderService:OrderService){
    this.menuItem = {id:0,name:'',price:0};
  }
  ///
  ngOnInit(): void {
    //console.log(this.menuItem);
  }
  // Fucion para añadir elementos al dar click en el item
  handleAddItem(){
    this.orderService.addItemToOrder(this.menuItem);
  }
}
