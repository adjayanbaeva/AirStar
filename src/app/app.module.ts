import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { HomelistComponent } from './homelist/homelist.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomelistComponent,
    HomeDetailComponent
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
