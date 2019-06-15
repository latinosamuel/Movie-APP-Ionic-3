import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public welcome : string = "Welcome to Ionic !";
  public int : number = 0;
  public bool : Boolean = true;
  public list : Array<string> = ['Rita','João','Carla','Mariana','Carlos'];
  public listAny : Array<any> = ['Teste',10,true];

  constructor(public navCtrl: NavController) {

  }

}
