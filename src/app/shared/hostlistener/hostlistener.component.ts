import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent {
  /**
   * Example ID8
   * 
   * @HostListener
   * 
   * shared/hostlistener.html
   * shared/hostlistener.ts
   */
  clicked: MouseEvent;
  answer: string = "click somewhere and check console";
  @HostListener("document:click", ["$event"])
  onClick(elem): void {
    this.answer = "nice you clicked. reload and click again.";
    console.log("clicked ", elem);
  }

}
