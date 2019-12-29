import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  OnInit
} from "@angular/core";
import { CardComponent } from "./shared/card/card.component";
import { CustomerService } from "./services/customer.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnInit {
  name: string = "Doc";

  /**
   * Example ID1
   *
   * @Input
   * from app to gallery
   *
   * app.html
   * app.ts
   * shared/gallery.html
   * shared/gallery.ts
   */
  pictures: string = "hello from app";

  /**
   * Example ID2
   *
   * @Output
   * from characteristics to app
   *
   * app.html
   * app.ts
   * shared/characteristics.html
   * shared/characteristics.ts
   */
  message: string = "nothing from characteristics yet";

  receiveMessage($event) {
    this.message = $event;
  }

  /**
   * Example ID3
   *
   * @ViewChild
   * from card to app
   *
   * app.html
   * app.ts
   * shared/card.ts
   */
  color: string;

  @ViewChild(CardComponent, { static: false }) card;

  ngAfterViewInit() {
    this.color = this.card.color;
  }

  /**
   * Example ID4
   *
   * @Output and @Input
   * from advertisement to app to notification
   *
   * app.html
   * app.ts
   * notification.html
   * notification.ts
   * shared/advertisement.ts
   *
   * @Output
   * from advertisement to app (trackedVisitors and receiveTrackedVisitors)
   *
   * AND
   *
   * @Input
   * from app to notification (trackedVisitors)
   */
  trackedVisitors: string = "nothing from advertisement yet";

  receiveTrackedVisitors($event) {
    this.trackedVisitors = $event;
  }

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
