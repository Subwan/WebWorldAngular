import { Component, OnInit } from '@angular/core';

declare var google: any;
var map;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    var building = {lat: 51.667242, lng: 39.195113};
    map = new google.maps.Map(document.getElementById('map'), {
      center: building,
      zoom: 15
    });
    var marker = new google.maps.Marker({
         position: building,
         map: map
       });
  }

  add(latitude: string, longtitude: string): void {
    var myLatlng = new google.maps.LatLng(parseFloat(latitude),parseFloat(longtitude));
    let marker = new google.maps.Marker({
         position: myLatlng,
         map: map
       });
  }
}
