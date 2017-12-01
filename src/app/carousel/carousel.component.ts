import { Component, OnInit } from '@angular/core';

import { CAROUSELITEMS } from './carousel-items';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselItems = CAROUSELITEMS;

  constructor() { }

  ngOnInit() {
  }

}
