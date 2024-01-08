import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTitleComponent } from './pages/home/components/main-title/main-title.component';
import { MainMiniCardComponent } from './pages/home/components/main-mini-card/main-mini-card.component';
import { MainFooterComponent } from './core/components/main-footer/main-footer.component';
import { MainHeaderComponent } from './core/components/main-header/main-header.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCarouselComponent } from './pages/home/components/main-carousel/main-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTitleComponent,
    MainMiniCardComponent,
    MainFooterComponent,
    MainHeaderComponent,
    HomeComponent,
    MainCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
