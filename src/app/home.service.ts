import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { HOMES } from './mock-homes';

@Injectable()
export class HomeService {

  constructor() { }

  getHomes() {
    return HOMES;
  }

  getHomeById(homeId: number){
    for (var i = 0; i <= HOMES.length - 1; i++) {
      if (HOMES[i].id === homeId) {
        return HOMES[i];
      }

}
}
}
