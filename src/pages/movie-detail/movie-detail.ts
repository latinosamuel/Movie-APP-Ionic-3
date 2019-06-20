import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDaoProvider } from '../../providers/movie-dao/movie-dao';
import { Movie } from '../../model/Movie';
import { Genre } from '../../model/Genre';
import { ProductionCompany } from '../../model/ProductionCompany';

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
  public movie : Movie;
  public idMovie : string;
  public title : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider : MovieProvider, public dao : MovieDaoProvider) {
  }

  save(movie : Movie){
    this.dao.insert(movie).then(() =>{
      alert("Filme gurdado Offline !");
    }).catch(e=> {
      alert("Erro ao gurdar o flime Offline !");
      console.log(e);
    })
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
        let movieJson = JSON.parse(obj._body);
        this.movie = new Movie(movieJson.id,movieJson.backdrop_path,movieJson.original_title,movieJson.overview,movieJson.porster_path,movieJson.title);
        for(let i = 0; i < movieJson.genres.length; i++){
          let genre = new Genre(movieJson.genres[i].getID,movieJson.genres[i].name);
          this.movie.addGenres(genre);
        }

        for(let i = 0; i < movieJson.production_companies.length; i++){
          let production = new ProductionCompany(movieJson.production_companies[i].getID,movieJson.production_companies[i].name,movieJson.production_companies[i].logo_path,movieJson.production_companies[i].original_country);
          this.movie.addProductionCompanies(production);
        }
       
        console.log(this.movie);
      },error =>{
        console.log(error)
      })
  }

}
