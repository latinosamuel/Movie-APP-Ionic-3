import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
  providers: [
    MovieProvider
  ]
})
export class MovieDetailPage {
  public movie : any;
  public idMovie : string;
  public title : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider : MovieProvider) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }*/

  //when you enter the new screen (Get params)
  ionViewDidEnter(){
    this.idMovie = this.navParams.get("id");
    this.movieProvider.getMovieDetail(this.idMovie).subscribe(
      data =>{
        const obj = (data as any);
        this.movie = JSON.parse(obj._body);
        console.log(this.movie);
      },error =>{
        console.log(error)
      })
  }

}
