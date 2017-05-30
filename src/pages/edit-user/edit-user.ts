import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


/**
 * Generated class for the EditUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

  data: any = {};
  id: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

    this.data.id = this.navParams.get('_id');
    this.data.name = this.navParams.get('name');
    this.data.email = this.navParams.get('email');

    console.log('ionViewDidLoad EditUserPage');
  }

  save(): void {

    let user = {
      _id: this.data.id,
      name: this.data.name,
      email: this.data.email,
    };

    this.viewCtrl.dismiss(user);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
