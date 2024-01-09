import { Component } from '@angular/core';
import { fakeMainCarousel } from "../../../../data/fakeMainCarousel";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class MainCarouselComponent {
  items: any;

  constructor(config: NgbCarouselConfig) {
    this.items = fakeMainCarousel;
    config.interval = 5000;
    config.animation = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

}
