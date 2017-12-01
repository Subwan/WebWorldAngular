import { Component, OnInit } from '@angular/core';


import { TAGITEMS } from './tag-items';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.css']
})
export class SectionInfoComponent implements OnInit {

  tagItems = TAGITEMS;

  constructor() { }

  ngOnInit() {
  }

}
