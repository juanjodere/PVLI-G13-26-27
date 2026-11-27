// Clase creada por Juan José de Reyna Godoy.

export default class Item extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, sprite, type, price = 0){

        super(scene, x, y, sprite, 0);

        this.type = type;
        this.price = price;

        
        scene.add.existing(this);
        scene.sys.updateList.add(this);

        this.setActive(false);

    }

    getType(){
        return this.type
    }

    getPrice(){ 
        return this.precio
    }

    SetType(t){
        if(typeof(t) === "string") this.type = t;
    }

    SetPrice(p){
        if(typeof(p) === "number") this.price = p;
    }
}