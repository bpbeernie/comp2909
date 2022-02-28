import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewDirective } from './newDirective';
import { NewDirective3 } from './newDirective3';
import { PhoneNumberPipe } from './PhoneNumberPipe';
import { TemperatureService } from './TemperatureService';
import { PageDefault }    from './app.pagedefault';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { routing }        from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, NewDirective, NewDirective3, PhoneNumberPipe, PageDefault,
    PageAComponent, PageBComponent

  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
