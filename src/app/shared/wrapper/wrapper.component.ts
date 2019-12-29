import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.css"]
})
export class WrapperComponent {
  /**
   * Example ID5a
   *
   * @HostBinding
   * bind custom class to :host
   *
   * shared/wrapper.html
   * shared/wrapper.css
   */
  @HostBinding("class") className = "wrapper";

  /**
   * Example ID5b
   *
   * @OneWayBinding
   * bind property to html
   *
   * shared/wrapper.html
   * shared/wrapper.ts
   */
  bindHtml: string =
    "I am some one-way binded <strong>[innerHTML]</strong> demo getting styles from <strong>@HostBinding('class')</strong>";
}
