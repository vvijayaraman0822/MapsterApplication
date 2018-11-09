import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/users/user.interface';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  constructor(private data: AngularFirestore) {
    console.log('Hello UserDataProvider Provider');
  }

  async createUserProfile(profile: User) {
    try {
      await this.data.collection<User>('users').add(profile);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

}
