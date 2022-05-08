import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeLineComponentComponent } from './time-line-component/time-line-component.component';
import { TopMenuComponentComponent } from './top-menu-component/top-menu-component.component';
import { InstaIpdComponent } from './insta-ipd/insta-ipd.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponentComponent,
    TopMenuComponentComponent,
    InstaIpdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
