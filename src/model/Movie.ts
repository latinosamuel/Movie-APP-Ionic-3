import { Genre } from './Genre';
import { ProductionCompany } from './ProductionCompany';


export class Movie{
    private id : number;
    private backdropPath : string;
    private originalTitle : string;
    private overview : string;
    private posterPath : string;
    private title : string;
    private genres : Array<Genre>;
    private productionCompanies : Array<ProductionCompany>;

    constructor(id? : number, backdropPath? : string, originalTitle? : string, overview? : string, posterPath? : string, title? : string){
        this.setID(id);
        this.setBackdropPath(backdropPath);
        this.setOriginalTitle(originalTitle);
        this.setOverview(overview);
        this.setPosterPath(posterPath);
        this.setTitle(title);
    }

    public setID(id : number) : void{
        this.id = id;
    }

    public getID() : number{
        return this.id;
    }

    public setBackdropPath( backdropPath : string) : void {
        this.backdropPath = backdropPath;
    }

    public getBackdropPath() : string {
        return this.backdropPath;
    }

    public setOriginalTitle( originalTitle : string) : void {
        this.originalTitle = originalTitle;
    }

    public getOriginalTitle() : string {
        return this.originalTitle;
    }

    public setOverview(overview : string) : void {
        this.overview = overview;
    }

    public getOverview() : string {
        return this.overview;
    }

    public setPosterPath(posterPath : string) : void {
        this.posterPath = posterPath;
    }

    public getPosterPath() : string {
        return this.posterPath;
    }

    public setTitle(title : string) : void {
        this.title = title;
    }

    public getTitle() : string {
        return this.title;
    }

    public setGenres(genres : Array<Genre>) : void {
        this.genres = genres;
    }

    public addGenres(genre : Genre) : void {
        if(this.genres == null){
            this.genres = new Array<Genre>();
        }
        this.genres.push(genre);
    }

    public getGenres() : Array<Genre> {
        return this.genres;
    }

    public setProductionCompanies(productionCompanies : Array<ProductionCompany>) : void {
        this.productionCompanies = productionCompanies;
    }

    public getProductionCompanies() : Array<ProductionCompany> {
        return this.productionCompanies;
    }

    public addProductionCompanies(productionCompany : ProductionCompany) : void {
        if(this.productionCompanies == null){
            this.productionCompanies = new Array<ProductionCompany>();
        }
        this.productionCompanies.push(productionCompany);
    }
}