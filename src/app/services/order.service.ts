import { Injectable, signal, computed } from '@angular/core';
import type { OrderItem } from '../types/types';
import type { MenuItems } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ///
  private order = signal<OrderItem[]>([]);
  public orderReadonly = this.order.asReadonly();
  
  // Actualiza el subtotal cuando la orden cambia
  public subtotalAmount = computed(() => {
    return this.orderReadonly().reduce((total, item) => total + (item.quantity * item.price), 0);
  });
  
  public tip = signal<number>(0);
  
  // Actualiza la propina
  public tipAmount = computed(() => {
    return this.subtotalAmount() * this.tip() ;
  });
  
  // Actualiza el total a pagar 
  public totalAmount = computed(()=>this.subtotalAmount()+this.tipAmount());

  ///
  constructor() { }
  
  ///
  // Funcion para añadir mas elementos a la orden
  addItemToOrder(item:MenuItems){
    // Revisar si el objeto ya existe
    const existsItem = this.orderReadonly().find(orderItem => orderItem.id === item.id);
    
    if(existsItem){
      console.log("Incrementando cantidad...");
      
      //  si los ID's no son iguales, retorna los mismos vaalores; sino modifica el que coincida y lo añade
      const updatedOrder = this.orderReadonly().map( (orderItem) => {
        return orderItem.id === item.id ? {...orderItem, quantity:orderItem.quantity+1} : orderItem;
      } );
      
      this.order.set(updatedOrder);
    }else{
      const newItem:OrderItem = {...item,quantity:1}
      //console.log("Añadiendo nuevo item...");
      this.order.update( (orders)=> [...orders,newItem] );
    }
    
    //console.log(this.orderReadonly());
  }
  // Funcion para remover un elemento de la orden
  removeItemToOrder(id:MenuItems['id']){
    console.log("Eliminando item..."+id);
    // Traer todos los diferentes al id enviado
    const updatedOrder = this.orderReadonly().filter((item)=>item.id!==id);
    if(updatedOrder.length === 0){
      this.tip.set(0);
    }
    this.order.set(updatedOrder);
    //console.log(updatedOrder);
  }
  // Funcion para elegir la propina
  setTip(optTip:number){
    //console.log("Seting tip...");
    this.tip.set(optTip);
  }
  // Funcion para almacenar la orden
  placeOrder(){
    this.order.set([]);
    this.tip.set(0);
  }
}
