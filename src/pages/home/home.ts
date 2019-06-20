import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movie } from '../../model/Movie';
import { MovieDaoProvider } from '../../providers/movie-dao/movie-dao';
import { EditMoviePage } from '../edit-movie/edit-movie';

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

  constructor(public navCtrl: NavController,public daoMovie : MovieDaoProvider) {

  }

  ionViewDidEnter(){
    this.updateListMovie();
  }

  //Verify that the "remove" successfully deleted a movie or not
  removeMovie(movie : Movie){
      this.daoMovie.remove(movie.getID()).then(() => {
        this.updateListMovie();
        alert("Filme removido com Sucesso !");
      }).catch(e => console.log(e));
  }

  editMovie(movie : Movie){
    this.navCtrl.push(EditMoviePage, {editMovie : movie});
  }

  public updateListMovie() : void{
    this.daoMovie.getAll().then((movies : Array<Movie>) =>{
      this.listMovies = movies;
    }).catch(e => console.log(e));
  }

}
