class Studente{

    id:number;
    name:String;

    constructor(_id:number, _name:String)
    {
        this.id = _id;
        this.name = _name;
    }

    display():void
    {
            console.log("studente"  + this.id);
            
    }   
}

let obj = new Studente(3, "Gianfranco");


obj.display();