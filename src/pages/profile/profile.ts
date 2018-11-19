import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users/user.interface';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { LoadingMessages, SuccessMessages, TOAST_DURATION, Pages, ErrorMessages } from '../../utils/constants';
import { UserDataProvider } from '../../providers/userData/userData';
import { LocationProvider } from '../../providers/location/location';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';

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
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.updateProfileMsgs();
  }

  /**
   * Checks if user profile exists and either creates new or updates user.Profile
   *
   * @memberof ProfilePage
   */
  async saveProfile() {

    if (await this.data.profileExists()) {
      await this.saveExistingProfile();
    } else {
      await this.saveNewProfile();
    }

    this.navCtrl.setRoot(Pages.HOME_PAGE);
    this.navCtrl.popAll();

  }

  async updateProfileMsgs() {
    if (await this.data.profileExists()) {
      this.profile = await this.data.getAuthenticatedUserProfile();
    }
  }

  /**
   * If user profile exists, updates and replaces existing data in user.Profile
   *
   * @memberof ProfilePage
   */
  async saveExistingProfile() {

    let loader = this.utilities.getLoading(LoadingMessages.PROFILE);

    if (this.validate()) {
      try {

        loader.present();

        await this.data.updateUserProfile(this.profile);

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

  /**
   * If user profile does not exists, creates and saves it
   *
   * @memberof ProfilePage
   */
  async saveNewProfile() {

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

  /**
   * Checks for empty fields
   *
   * @returns
   * @memberof ProfilePage
   */
  validate() {
    return this.profile.firstName !== '' && this.profile.lastName !== '' && this.profile.userName !== '' && this.profile.email !== '';
  }

}
