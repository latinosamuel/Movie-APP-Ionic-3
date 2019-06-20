import { Injectable } from '@angular/core';
import { Movie } from '../../model/Movie';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the MovieDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
//Add provider in APModel
export class MovieDaoProvider {

  constructor(public dbProvider : DatabaseProvider) {}

  public insert(movie : Movie){
      return this.dbProvider.getDB()
      .then((db : SQLiteObject) =>{
        let sql = 'insert into movie (id, backdrop_path, original_title, overview, poster_path, title) values (?, ?, ?, ?, ?, ?)';
        let data = [movie.getID(), movie.getBackdropPath(),movie.getTitle(),
        movie.getOverview(), movie.getPosterPath(), movie.getTitle()];

        return db.executeSql(sql,data).then(() =>{
          console.log("Inserted Movie");
        }).catch( e => console.error(e));
      })
      .catch(e => console.error(e));
  }

public remove(id : number) : void{
  this.dbProvider.getDB()
      .then((db : SQLiteObject) =>{
        let sql = 'delete from movie where id = ?';
        let data = [id];

        db.executeSql(sql,data).then(() =>{
          console.log("Removed Movie");
        }).catch( e => console.error(e));
      })
      .catch(e => console.error(e));

}

public update(movie : Movie) : void{
  this.dbProvider.getDB()
  .then((db : SQLiteObject) =>{
    let sql = 'update movie set id = ?, backdrop_path = ?, original_title = ? , overview = ? , poster_path = ? , title = ? where id = ?';
    let data = [movie.getID(), movie.getBackdropPath(),movie.getTitle(),
    movie.getOverview(), movie.getPosterPath(), movie.getTitle(),movie.getID()];

    db.executeSql(sql,data).then(() =>{
      console.log("Changed Movie");
    }).catch( e => console.error(e));
  })
  .catch(e => console.error(e));
}

public getAll() : Array<Movie>{
  this.dbProvider.getDB()
  .then((db : SQLiteObject) =>{
    let sql = 'select * from movie';
    let data : any[];
    db.executeSql(sql,data)
    .then((data : any) =>{
      if(data.rows.length > 0) {
        let movies = new Array<Movie>();
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          var movie = new Movie(tmp.id,tmp.backdropPath, tmp.originalTitle, tmp.overview,tmp.posterPath, tmp.title);
          movies.push(movie);
        }
        return movies;
      }else{
        return new Array<Movie>();
      }
    }).catch( e => {
      console.error(e);
      return null;
    });
  })
  .catch(e => {
    console.error(e);
    return null;
  });
  return null;
}


}
