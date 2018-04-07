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
  homes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

constructor(private router: Router, private homeService: HomeService) {}


  ngOnInit(){
    this.homes = this.homeService.getHomes();

  }

  goToDetailPage(clickedHome) {
    this.router.navigate(['homes', clickedHome.$key]);

   };
}

// implements OnInit {

  // constructor() { }
  //
  // ngOnInit() {
  // }
