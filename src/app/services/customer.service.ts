import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private messageSource = new BehaviorSubject<string>("hello from CustomerService");
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(customerMessage: string) {
    this.messageSource.next(customerMessage);
  }
}
