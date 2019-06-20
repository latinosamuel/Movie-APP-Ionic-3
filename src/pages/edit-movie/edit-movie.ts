import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../model/Movie';
import { MovieDaoProvider } from '../../providers/movie-dao/movie-dao';

/**
 * Generated class for the EditMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-movie',
  templateUrl: 'edit-movie.html',
})
export class EditMoviePage {
  protected editMovie : Movie

  constructor(public navCtrl: NavController, public navParams: NavParams,public daoProvider : MovieDaoProvider) {
  }

  save(movie : Movie){
    this.daoProvider.update(movie).then(() =>{
      alert("Filme alterado com Sucesso !");
      this.navCtrl.remove(this.navCtrl.getActive().index);
    }).catch(e => console.error(e));
  }

  ionViewDidLoad() {
    this.editMovie = this.navParams.get("editMovie");
    console.log(this.editMovie);
  }

}
