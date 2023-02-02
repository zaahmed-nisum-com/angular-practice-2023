import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thankyou-order-confirm',
  templateUrl: './thankyou-order-confirm.component.html',
  styleUrls: ['./thankyou-order-confirm.component.css'],
})
export class ThankyouOrderConfirmComponent {
  // @Input() =orderComplete
  @Input() orderComplete: any;
  isOpen = false;

  constructor() {
    this.isOpen = this.orderComplete;
  }

  handleClose = () => {
    console.log('handleClose');
    this.isOpen = false;
  };
}
