import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public contacts : Array<Object> = [];
  constructor(public navCtrl: NavController) {
      this.contacts = [
        {
          "nome": "Woody",
          "img" : "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/avatar-ts-woody.png",
          "msg" : "This town ain't big enough for the two of us!"
        },
        {
          "nome": "Buzz Lightyear",
          "img" : "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/avatar-ts-buzz.png",
          "msg" : "My eyeballs could have been sucked from their sockets!"
        },
        { 
          "nome": "Jessie",
          "img" : "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/avatar-ts-jessie.png",
          "msg" : "Well aren't you just the sweetest space toy I ever did meet!"
        }
      ]
  }

}
