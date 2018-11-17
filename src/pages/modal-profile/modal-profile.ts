import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Pages } from '../../utils/constants';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-modal-profile',
  templateUrl: 'modal-profile.html',
})
export class ModalProfilePage {

  friends$: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider, public util: UtilitiesProvider, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProfilePage');
  }

  close() {
    this.view.dismiss();
  }

  logoutConfirm() {
    this.util.confirmAlert('Logout', 'Are you sure?', async () => {
      await this.auth.logout();
      this.navCtrl.setRoot(Pages.LOGIN_PAGE);
      this.navCtrl.popToRoot();
    });
  }
}
