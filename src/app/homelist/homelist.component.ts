import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css'],
  providers: [HomeService]
})
export class HomelistComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  homes: Home[];

  constructor(private router: Router, private homeService: HomeService) {}
  //  = [
  //   new Home ("img", "Apartment", "1432 Downtown Seattle", "Beautiful apartment, within walking distance of parks, bars, museums and downtown.", "Kitchen, Wifi, Washer", "no smoking, no parties or events", "Cancel up to 5 days before check in and get a full refund . Cancel within 5 days of your trip" ),
  //   new Home ("img", "Studio", "64829 Capitol Hill, Seattle", "Beautiful studio, within walking distance of parks, bars, museums and downtown.", "Kitchen, Wifi, Washer", "no pets", "Cancel up to 2 days before check in and get a full refund . Cancel within 5 days of your trip")
  // ];

  ngOnInit(){
    this.homes = this.homeService.getHomes();

  }

  goToDetailPage(clickedHome: Home) {

   };
}

// implements OnInit {

  // constructor() { }
  //
  // ngOnInit() {
  // }
