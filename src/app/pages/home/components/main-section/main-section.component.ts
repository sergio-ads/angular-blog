import { Component } from '@angular/core';
import { fakeCards } from 'src/app/data/fakeCards';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  items: any;

  constructor() {
    this.items = fakeCards;
  }

}
