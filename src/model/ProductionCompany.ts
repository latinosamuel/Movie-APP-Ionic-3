export class ProductionCompany{
    private id : number;
    private name : string;
    private logoPath : string;
    private originCountry : string;

    constructor(id? : number, name? : string, logopath? : string, originCountry? : string){
        this.setID(id);
        this.setName(name);
        this.setLogoPath(logopath);
        this.setOriginCountry(originCountry);
    }

    public setID(id : number) : void {
        this.id = id;
    }

    public getID() : number{
        return this.id;
    }

    public setName(name : string) : void{
        this.name = name;
    }

    public getName() : string{
        return this.name;
    }

    public setLogoPath(logoPath : string){
        this.logoPath = logoPath;
    }

    public getLogoPath() : string{
        return this.logoPath;
    }

    public setOriginCountry(originCountry : string){
        this.originCountry = originCountry;
    }

    public getOriginCountry() : string{
        return this.originCountry;
    }
    
}