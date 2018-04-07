import { Component} from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-host-a-home',
  templateUrl: './host-a-home.component.html',
  styleUrls: ['./host-a-home.component.css'],
  providers: [HomeService]
})
export class HostAHomeComponent implements OnInit {

  constructor(private albumService: HomeService) { }

  ngOnInit() {
  }

  submitForm(imageUrl: string, name: string, address: string, description: string, amenities: string, rules: string, cancellation: string) {
    var newHome: Home = new Home(imageUrl, name, address, description, amenities, rules, cancellation);
    this.homeService.addHome(newHome);

  }

}
