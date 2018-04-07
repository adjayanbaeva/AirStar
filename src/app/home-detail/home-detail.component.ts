import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  providers: [HomeService]
})
export class HomeDetailComponent implements OnInit {
  homeId: number = null;

  constructor(private route: ActivatedRoute, private location: Location, private homeService: HomeService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.placeId = parseInt(urlParameters['id']);
    });
  }

}
