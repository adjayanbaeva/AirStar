import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent {
  homes: Home[] = [
    new Home ("img", "Apartment", "1432 Downtown Seattle", "Beautiful apartment, within walking distance of parks, bars, museums and downtown.", "Kitchen, Wifi, Washer", "no smoking, no parties or events", "Cancel up to 5 days before check in and get a full refund (minus service fees). Cancel within 5 days of your trip" ),
    new Home ("img", "Studio", "64829 Capitol Hill, Seattle", "Beautiful studio, within walking distance of parks, bars, museums and downtown.", "Kitchen, Wifi, Washer", "no pets", "Cancel up to 2 days before check in and get a full refund (minus service fees). Cancel within 5 days of your trip")
  ]
}

// implements OnInit {

  // constructor() { }
  //
  // ngOnInit() {
  // }

}
