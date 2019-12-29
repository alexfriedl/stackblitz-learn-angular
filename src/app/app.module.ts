import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NotificationComponent } from "./notification/notification.component";
import { CardComponent } from "./shared/card/card.component";
import { CharacteristicsComponent } from "./shared/characteristics/characteristics.component";
import { GalleryComponent } from "./shared/gallery/gallery.component";
import { AdvertisementComponent } from './shared/advertisement/advertisement.component';
import { WrapperComponent } from './shared/wrapper/wrapper.component';
import { ViewchildComponent } from './shared/viewchild/viewchild.component';
import { HostlistenerComponent } from './shared/hostlistener/hostlistener.component';
import { RxjsChildComponent } from './shared/rxjs-child/rxjs-child.component';
import { RxjsSiblingComponent } from './rxjs-sibling/rxjs-sibling.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NotificationComponent,
    CardComponent,
    CharacteristicsComponent,
    GalleryComponent,
    AdvertisementComponent,
    WrapperComponent,
    ViewchildComponent,
    HostlistenerComponent,
    RxjsChildComponent,
    RxjsSiblingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
