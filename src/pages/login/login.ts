import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  today = new Date();

  rockbands: any[] = [
    {
      title: 'Los prisioneros xxx',
      img:'https://i.ytimg.com/vi/Z0FNpbJDLzQ/maxresdefault.jpg',
      text: 'skjfhasdhfjkasdhf sdjkfhkasfh sdkjfhklsufh mhsdfksdf'
    },
    {
      title: 'nirvana',
      img:'assets/imgs/nirvana.jpg',
      text: 'skkdjf sdkfsd casdjhfasdfahgasjhdjkfhkasfh sdkjfhklsufh mhsdfksdf'
    },
    {
      title: 'ac/dc',
      img:'https://images5.alphacoders.com/433/thumb-1920-433503.jpg',
      text: '345663238739'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  goToRegisterPage(){
    this.navCtrl.push( 'RegisterPage' );
  }

}
