import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ITEMS } from './items';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
