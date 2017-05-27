import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { UserDataProvider } from '../../providers/user-data/user-data';
import { AddUserPage } from '../add-user/add-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController,
    public userService: UserDataProvider,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {

    this.userService.loadUser().then(data => {
      this.users = data;
    }, err => {

    });

  }

  addUser() {

    let modal = this.modalCtrl.create(AddUserPage);

    modal.onDidDismiss(data => {
      if (data) {
        this.users.push(data);
        this.userService.createUser(data);
      }
    });

    modal.present();

  }

  deleteUser(data) {

    //Remove locally
    let index = this.users.indexOf(data);

    if (index > -1) {
      this.users.splice(index, 1);
    }

    //Remove from database
    this.userService.deleteUser(data._id);
  }

}
