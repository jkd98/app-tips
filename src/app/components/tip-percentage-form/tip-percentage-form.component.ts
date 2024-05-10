import { Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-tip-percentage-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tip-percentage-form.component.html',
  styleUrl: './tip-percentage-form.component.css'
})
export class TipPercentageFormComponent {
  ///
  public tipOptons:Array<any> = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ];
  public tip:number=0;
  public tipComputed = computed(()=>this.orderService.tip());
  ///
  constructor(private orderService:OrderService){ }
  ///
  handleTip(){
    this.orderService.setTip(this.tip);
  }
}
