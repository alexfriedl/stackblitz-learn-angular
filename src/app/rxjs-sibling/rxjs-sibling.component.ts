import { Component, OnInit } from '@angular/core';
import { CustomerService } from "./../services/customer.service";

@Component({
  selector: 'app-rxjs-sibling',
  templateUrl: './rxjs-sibling.component.html',
  styleUrls: ['./rxjs-sibling.component.css']
})
export class RxjsSiblingComponent implements OnInit {
  /**
   * coming soon
   */
  customerMessage: string;

  constructor(private customer: CustomerService) {}

  ngOnInit() {
    this.customer.currentMessage.subscribe(
      customerMessage => (this.customerMessage = customerMessage)
    );
  }
}
