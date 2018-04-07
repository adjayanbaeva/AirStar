import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HomeService {
  homes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.homes = database.list('homes');
}


  getHomes() {
    return this.homes;
  }

  addHome(newHome: Home) {
    this.homes.push(newHome);
  }

  getHomeById(homeId: number){


}
}
