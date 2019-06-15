import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public welcome : string = "Welcome to Ionic 4!";

  constructor(public navCtrl: NavController) {

  }

}
