import { Component, OnInit } from '@angular/core';
import { CustomerService } from "./../../services/customer.service";

@Component({
  selector: 'app-rxjs-child',
  templateUrl: './rxjs-child.component.html',
  styleUrls: ['./rxjs-child.component.css']
})
export class RxjsChildComponent implements OnInit {
  /**
   * RXJS TOD
   */
  customerMessage: string;

  constructor(private customer: CustomerService) {}

  ngOnInit() {
    this.customer.currentMessage.subscribe(
      customerMessage => (this.customerMessage = customerMessage)
    );
  }

}
