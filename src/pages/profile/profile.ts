import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users/user.interface';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { LoadingMessages, SuccessMessages, TOAST_DURATION, Pages, ErrorMessages } from '../../utils/constants';
import { UserDataProvider } from '../../providers/userData/userData';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private utilities: UtilitiesProvider, private data: UserDataProvider) {
    this.profile.firstName = this.profile.lastName = this.profile.userName = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  async saveProfile() {

    let loader = this.utilities.getLoading(LoadingMessages.PROFILE);

    if (this.validate()) {
      try {
        
        loader.present();

        await this.data.createUserProfile(this.profile);

        loader.dismiss();
        this.utilities.showToast(SuccessMessages.PROFILE, TOAST_DURATION);
        this.navCtrl.setRoot(Pages.HOME_PAGE);

      } catch (e) {
        loader.dismiss();
        this.utilities.showToast(e, TOAST_DURATION);
      }
    } else {
      this.utilities.showToast(ErrorMessages.EMPTY_FIELDS, TOAST_DURATION);
    }

  }

  validate() {
    return this.profile.firstName !== '' && this.profile.lastName !== '' && this.profile.userName !== '';
  }

}
