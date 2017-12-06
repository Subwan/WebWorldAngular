import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-coord',
  templateUrl: './input-coord.component.html',
  styleUrls: ['./input-coord.component.css']
})
export class InputCoordComponent implements OnInit {

  default = { lat: 0, lng: 0 };

  @Output() onAdd = new EventEmitter<any>();

  add(latitude: string, longtitude: string) {
    let mark = {lat: latitude, lng: longtitude};
    this.onAdd.emit(mark);
  }
  constructor() { }

  ngOnInit() {
  }

}
