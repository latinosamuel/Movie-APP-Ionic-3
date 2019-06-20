import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject} from '@ionic-native/sqlite'

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite : SQLite) {}

  // Conection to database
  public getDB(){
    return this.sqlite.create({
      name: 'themoviedb',
      location: 'default'
    });
  }

  public createDatabase(){
    return this.getDB().then((db : SQLiteObject) =>{
      this.createTables(db);
    })
    .catch(e => console.error(e));
  }

  private createTables(db : SQLiteObject){
    return db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS movie(id integer primary key NOT NULL, backdrop_path VARCHAR(100), original_title VARCHAR(100) NOT NULL, overview VARCHAR(1000), poster_path VARCHAR(100), title VARCHAR(100) NOT NULL);'],
      ['CREATE TABLE IF NOT EXISTS genres(id integer primary key NOT NULL, name VARCHAR(60) NOT NULL);'],
      ['CREATE TABLE IF NOT EXISTS production_companies( id integer primary key NOT NULL, name VARCHAR(80) NOT NULL, logo_path VARCHAR(100), origin_country VARCHAR(100) NOT NULL);'],
      ['CREATE TABLE IF NOT EXISTS movie_genres(id_movie integer NOT NULL, id_genres integer NOT NULL, FOREIGN KEY(id_movie) REFERENCES movie(id), FOREIGN KEY(id_genres) REFERENCES genres(id), PRIMARY KEY(id_movie,id_genres));'],  
      ['CREATE TABLE IF NOT EXISTS movie_prod_comp(id_movie integer NOT NULL, id_production_companies integer NOT NULL, FOREIGN KEY(id_movie) REFERENCES movie(id), FOREIGN KEY(id_production_companies) REFERENCES genres(id), PRIMARY KEY(id_movie, id_production_companies));']
    ]).then(() =>{
        console.log("Successfully create tables")
      }).catch(e => console.error(e));
  }
}
