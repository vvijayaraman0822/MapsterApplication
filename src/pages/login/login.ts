import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/users/user.interface';
import { Account } from '../../models/registration/account.interface';
import { AuthProvider } from '../../providers/auth/auth';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { TOAST_DURATION, Pages, LoadingMessages, ErrorMessages } from '../../utils/constants';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account = {} as Account;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private utilities: UtilitiesProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {

    let loader = this.utilities.getLoading(LoadingMessages.LOGIN);

    // check for empty fields
    if (this.validate()) {

      try {

        loader.present();

        await this.auth.loginWithEmailAndPassword(this.account);

        loader.dismiss();
        this.navCtrl.setRoot(Pages.HOME_PAGE)

      } catch (e) {
        loader.dismiss();
        this.utilities.showToast(e, TOAST_DURATION);
      }
      
    } else {
      this.utilities.showToast(ErrorMessages.EMPTY_FIELDS, TOAST_DURATION);
    }

  }

  register() {
    this.navCtrl.push(Pages.REGISTER_PAGE);
  }

  validate() {
    return this.account.email !== null && this.account.email !== ''
      && this.account.password !== null && this.account.password !== '';
  }

}
