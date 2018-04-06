import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { HOMES } from './mock-homes';

@Injectable()
export class HomeService {

  constructor() { }

  getHomes() {
    return HOMES;
  }

}
