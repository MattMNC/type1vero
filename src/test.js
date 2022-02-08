"use strict";
class Studente {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    display() {
        console.log("studente" + this.id);
    }
}
let obj = new Studente(3, "Gianfranco");
obj.display();
