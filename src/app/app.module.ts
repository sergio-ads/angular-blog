import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './pages/home/components/main-section/main-section.component';
import { MainFooterComponent } from './core/components/main-footer/main-footer.component';
import { MainHeaderComponent } from './core/components/main-header/main-header.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCarouselComponent } from './pages/home/components/main-carousel/main-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    MainFooterComponent,
    MainHeaderComponent,
    HomeComponent,
    MainCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
