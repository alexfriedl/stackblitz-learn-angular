import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-characteristics",
  templateUrl: "./characteristics.component.html",
  styleUrls: ["./characteristics.component.css"]
})
export class CharacteristicsComponent {
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
  message: string = "hello from characteristics";
  @Output() clickEvent = new EventEmitter();

  sendMessage() {
    this.clickEvent.emit(this.message);
  }
}
