import { Component, OnInit } from '@angular/core';

declare var google: any;
var map;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
  private isVisible = false;

  constructor() {
  }

  ngOnInit() {
    var building = { lat: 51.667242, lng: 39.195113 };
    map = new google.maps.Map(document.getElementById('map'), {
      center: building,
      zoom: 15
    });
    var marker = new google.maps.Marker({
      position: building,
      map: map
    });
  }

  onAdd(mark: any): void {
    var myLatlng = new google.maps.LatLng(parseFloat(mark.lat), parseFloat(mark.lng));
    let marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
}
