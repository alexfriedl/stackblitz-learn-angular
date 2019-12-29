import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-advertisement",
  templateUrl: "./advertisement.component.html",
  styleUrls: ["./advertisement.component.css"]
})
export class AdvertisementComponent implements OnInit {
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
   * from advertisement to app
   */
  trackedVisitors: string = "hello from advertisement";

  // Custom Event with EventEmitter
  @Output() resizeEvent = new EventEmitter();

  // Method to handle resize event
  onResize() {
    // EventListener
    window.addEventListener(
      // Event
      "resize",
      () => {
        // EventHandler (Callback)
        this.resizeEvent.emit(this.trackedVisitors);
      }
    );
  }

  ngOnInit() {
    // Setting up EventHandling on DOM ready
    this.onResize();
  }
}
