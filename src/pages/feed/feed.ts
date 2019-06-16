import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public list_movie : Array<any>;

  constructor(public navCtrl: NavController,public movieProvider : MovieProvider) {

  }

  ionViewDidLoad(){
    this.movieProvider.getPopularMovie().subscribe(
      data =>{
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
       // this.list_movie = new Array<any>();
        this.list_movie = obj_json.results;
        console.log(this.list_movie)
      }, error =>{
        console.log(error);
      }
    )
  }
}
