import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TOAST_DURATION, Pages, LoadingMessages, ErrorMessages } from '../../utils/constants';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public openProfileModal() {
    let profileModal = this.modal.create(Pages.MODAL_PROFILE);
    profileModal.present();
  }

  public closeModal() {
    
  }

}
