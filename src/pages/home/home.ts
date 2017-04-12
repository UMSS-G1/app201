import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Login } from '../login/login';

import { Person } from './person.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  twitter: string = '@nicobytes';
  persons: Person[] = [];
  newPerson: any = {};

  constructor(public navCtrl: NavController) {
    let person1 = new Person('nicolas', 23);
    let person2 = new Person('valentina', 15, true);
    let person3 = new Person('andrea', 24);
    let person4 = new Person('nancy', 45, true);

    console.log('antes', person1.getName() );
    person1.setName('nicbytes');
    console.log('despues', person1.getName() );
    console.log('despues', person1.getName() );


    this.persons.push(person1);
    this.persons.push(person2);
    this.persons.push(person3);
    this.persons.push(person4);

    let tmp = '<h1></h1>' +
    'sdjsdkklsdjlsd ' + true  + ' sd' +
    'asas' +
    'asas';

    let tmp2 = `
      sdsdsd
      ${person1.getAge()}
      sdsds
      sdsdsd

      sdsdsd

      sdsdsd
      sd
    `;

    this.persons.forEach(person=>{
      console.log( person.getName() + ' isSinlge? ' + person.isSingle );
      console.log( `${person.getName()} is Single? ${person.isSingle}`);
    });
    
  }

  goToPage(){
    this.navCtrl.push( Login );
  }

  showAlert(){
    alert('Hoooooooola');
  }

  updateTwitter( event ){
    this.twitter = event.target.value;
  }

  addPerson( person ){
    this.persons.unshift(new Person(person.name, person.age));
    this.newPerson = {};
  }

  removePerson(){
    this.persons.splice(0,1);
  }

}
