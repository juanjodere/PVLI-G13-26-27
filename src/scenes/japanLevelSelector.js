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
        this.store1 = new mapNode(this,0,0,'startButton','testSong',null,null,null).setOrigin(0,0);
        this.level1A = new mapNode(this,400,100,'creditsButton','CreditsScene',null,null,null,null).setOrigin(0,0).setScale(0.4);
        this.level1B = new mapNode(this,200,300,'playerSkin','MainGameScene',null,null,null,null).setOrigin(0,0);

        //Conectamos los nodos
        this.store1.nodeDown = this.level1B;
        this.store1.nodeRight = this.level1A;

        this.level1A.nodeLeft = this.level1B;
        this.level1A.nodeUp = this.store1;

        this.level1B.nodeUp = this.store1;
        this.level1B.nodeRight = this.level1A;
        //asignamos el nodo inicial
        this.level1A.selected = true;

    }

    update(time,deltaTime)
    {
       
    }
};