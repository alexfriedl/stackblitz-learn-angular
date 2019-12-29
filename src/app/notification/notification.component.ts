import { Component, Input } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent {
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
   * @Input
   * from app to notification (trackedVisitors)
   *
   * To use the @Input() decorator in a child component class,
   * first import Input and then decorate the property with @Input():
   */
  @Input() ItrackedVisitors: string; // decorate the property with @Input()
}
