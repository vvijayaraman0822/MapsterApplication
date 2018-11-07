import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {  map } from 'rxjs/operators';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private firestore: AngularFirestore) {
    console.log('Hello DataProvider Provider');
  }

}
