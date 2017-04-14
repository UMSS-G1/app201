import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RockbandService } from '../../providers/rockband-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  today = new Date();

  rockbands: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private rockbandService: RockbandService
  ) {
  }

  ionViewDidLoad() {
    this.rockbands = this.rockbandService.getAll();
  }

  goToRegisterPage(){
    this.navCtrl.push( 'RegisterPage' );
  }

}
