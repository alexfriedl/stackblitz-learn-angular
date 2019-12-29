import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
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
   *
   * To use the @Input() decorator in a child component class,
   * first import Input and then decorate the property with @Input():
   */
  @Input() Igallery: string; // decorate the property with @Input()

  constructor() {}

  ngOnInit() {}
}
