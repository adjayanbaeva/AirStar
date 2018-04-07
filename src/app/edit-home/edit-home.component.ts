import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css'],
  providers: [HomeService]
})


export class EditHomeComponent implements OnInit {
  @Input() selectedHome;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  beginUpdatingHome(homeToUpdate){
    this.homeService.updateHome(homeToUpdate);
  }

}
