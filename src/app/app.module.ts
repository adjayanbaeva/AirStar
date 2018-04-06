import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { HomelistComponent } from './homelist/homelist.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomelistComponent
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
