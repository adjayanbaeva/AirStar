import { Component, OnInit} from '@angular/core';
import { HomeService } from '../home.service';
import { Home } from '../home.model';


@Component({
  selector: 'app-host-a-home',
  templateUrl: './host-a-home.component.html',
  styleUrls: ['./host-a-home.component.css'],
  providers: [HomeService]
})
export class HostAHomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  submitForm(imageUrl: string, name: string, address: string, description: string, amenities: string, rules: string, cancellation: string) {
    var newHome: Home = new Home(imageUrl, name, address, description, amenities, rules, cancellation);
    this.homeService.addHome(newHome);

  }

}
