import mapNode from "../objects/mapNode.js";
export class japanLevelSelector extends Phaser.Scene{
    

    constructor()
    {
        super({key:'japanLevelSelector'})
    }
    
    preload()
    {

    }
    create(){
       
        //Creamos los nodos sin conectar
        this.store1 = new mapNode(this,0,0,'startButton','MainMenuScene',null,null,null);
        this.level1A = new mapNode(this,500,500,'creditsButton','CreditsScene',null,null,null,null);
        this.level1B = new mapNode(this,0,500,'playerSkin','CreditsScene',null,null,null,null);

        //Conectamos los nodos
        this.store1.nodeLeft = this.level1B;
        this.store1.nodeRight = this.level1A;

        this.level1A.nodeLeft = this.level1B;
        this.level1A.nodeUp = this.store1;

        this.level1B.nodeUp = this.store1;
        this.level1B.nodeRight = this.level1A;
        //asignamos el nodo inicial
        this.level1A.selected = true;

    }

    update()
    {
        
    }
};