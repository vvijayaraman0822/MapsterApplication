import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/registration/account.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password);
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }

  async loginWithEmailAndPassword(account: Account) {
    try {
      await this.auth.auth.signInWithEmailAndPassword(account.email, account.password);
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.auth.authState.subscribe((auth) => {
        if (auth) {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }

  getAuthenticatedUser() {
    return new Promise<any>((resolve, reject) => {
      let subscription = this.auth.user.subscribe((user) => {
        console.log(user);
        resolve(user);
        subscription.unsubscribe();
      });
    });
  }

  async logout() {
    await this.auth.auth.signOut();
  }

}
