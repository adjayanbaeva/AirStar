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

  beginDeletingHome(homeToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.homeService.deleteHome(homeToDelete);
    }
  }

}
