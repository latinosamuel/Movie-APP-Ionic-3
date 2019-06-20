export class Genre {
    private id : number;
    private name : string;

    constructor(id? : number, name? : string){
        this.setID(id);
        this.setName(name);
    }
    
    public setID(id : number) : void{
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
}