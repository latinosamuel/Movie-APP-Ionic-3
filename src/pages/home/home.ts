import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movie } from '../../model/Movie';
import { MovieDaoProvider } from '../../providers/movie-dao/movie-dao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public welcome : string = "Welcome to Ionic !";
  public int : number = 0;
  public bool : Boolean = true;
  public listMovies : Array<Movie>;
  public listAny : Array<any> = ['Teste',10,true];

  constructor(public navCtrl: NavController,public dbProvider : MovieDaoProvider) {

  }

  ionViewDidEnter(){
    this.updateListMovie();
  }

  public updateListMovie() : void{
    this.dbProvider.getAll().then((movies : Array<Movie>) =>{
      this.listMovies = movies;
    }).catch(e => console.log(e));
  }

}
