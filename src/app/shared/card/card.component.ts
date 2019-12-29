import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent{
  /**
   * Example ID3
   *
   * @ViewChild
   * from card to app
   *
   * app.html
   * app.ts
   * shared/card.ts
   *
   * hello from card will be displayed via @ViewChild defined in parent
   */
  color: string = "hello from card";
}
