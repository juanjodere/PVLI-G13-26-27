// Clase creada por Juan José de Reyna Godoy.

export default class Inventory{

    constructor(){
        this.skins = new subInventory();
        this.collectables = new subInventory();
        this.missionObjects = new subInventory();

        this.money = 0;
    }

    // Manejo del dinero.

    addMoney(quantity){
        this.money += quantity;
    }

    getMoney(){
        return this.money;
    }

    removeMoney(quantity){
        if (this.money - quantity >= 0) this.money -= quantity;
    }

    // Añade objetos específicos.

    addObject(obj){

        if (obj.type == "skin"){

            this.skins.addToList(obj);

        }
        else if (obj.type == "mission"){

            this.missionObjects.addToList(obj);
        
        }
        else if (obj.type == "collectable"){

            this.collectables.addToList(obj);

        }
    
    }

    // Comprueba si hay un objeto específico.

    haveObject(obj){

        if (obj.type == "skin"){

            return this.skin.isThingOnList(obj);

        }
        else if (obj.type == "mission"){

            return this.missionObjects.isThingOnList(obj);
        
        }
        else if (obj.type == "collectable"){

            return this.collectables.isThingOnList(obj);

        }
        else return false;

    }

    // Eliminan Objetos específicos.

    removeObject(obj){
        
        if (obj.type == "skin"){

            this.skins.removeThingFromList(obj);

        }
        else if (obj.type == "mission"){

            this.missionObjects.removeThingFromList(missObj);
        
        }
        else if (obj.type == "collectable"){

            return this.collectables.isThingOnList(obj);

        }

    }

    showInventory(){

        for (let i = 0; i < this.skins.length; ++i){
            this.skins.list[i].setActive(true);
            this.skins.list[i].setVisible(true);
        }

        for (let i = 0; i < this.collectables.length; ++i){
            this.collectables.list[i].setActive(true);
            this.collectables.list[i].setVisible(true);
        }

        for (let i = 0; i < this.missionObjects.length; ++i){
            this.missionObjects.list[i].setActive(true);
            this.missionObjects.list[i].setVisible(true);
        }

    }

    hideInventory(){

        for (let i = 0; i < this.skins.length; ++i){
            this.skins.list[i].setActive(false);
            this.skins.list[i].setVisible(false);
        }

        for (let i = 0; i < this.collectables.length; ++i){
            this.collectables.list[i].setActive(false);
            this.collectables.list[i].setVisible(false);
        }

        for (let i = 0; i < this.missionObjects.length; ++i){
            this.missionObjects.list[i].setActive(false);
            this.missionObjects.list[i].setVisible(false);
        }

    }
    
} 

class subInventory{

    constructor(){
        this.list = [];
        this.length = 0;
    }

    addToList(thing){ // Añade el objeto del parámetro a la lista.
        this.list.push(thing);
        this.length = this.list.length;
    }

    isThingOnList(thing){ // Devuelve true si está el objeto en la lista.
        let loc = this.list.find((elem) => elem == thing);
        return loc != null; 
    }

    removeThingFromList(thing){ // Elimina el objeto de la lista, si está.

        if (isThingOnList(thing)){
            
            for (i = this.list.findIndex(thing); i < this.list.length - 1; --i){

                let temp = this.list[i];
                this.list[i] = this.list[i + 1];
                this.list[i + 1] = temp;

            }

            this.list.pop();
            this.length = this.list.length;

        }

    }
    
}
