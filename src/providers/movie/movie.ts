import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseUrl : string = "https://api.themoviedb.org/3/movie/";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  public getLatestMovie(){
    return this.getMovie("latest");
  }

  public getPopularMovie(){
    return this.getMovie("popular");
  }

  private getMovie(url : string){
    return this.http.get(this.baseUrl + url + this.getApiKey());
  }

  private getApiKey() : string {
    return "?api_key=f3d2f32551b385884ffd3aacb9c1373e"
  }

}
