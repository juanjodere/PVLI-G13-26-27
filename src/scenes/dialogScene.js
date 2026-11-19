import dialogManager from "../objects/dialogManager.js";

export class dialogScene extends Phaser.Scene {

    constructor() {
        super({ key: "dialogScene" });
    }

    init(data) {

        // Estas variables se usarán en esta escena
        this.professor = data.character;
        this.skin = data.skin;
        this.inventory = data.inventory;
        this.globalAura = data.globalAura;
        this.initialNode = data.locationNode;

        //Manejamos el texto a leer y el sprite del enemigo (WIP)
        this.text = data.text;
        this.enemySprite;
        this.background = data.background;

        // Estas se necesitan solo para pasar esta información a otra escena.
        this.levelsCompleted = data.levelsCompleted;
    }

    create()
    {
        this.SceneBackGround = this.add.image(0, 0, this.background).setOrigin(0, 0);

        this.dialogManager = new dialogManager(this,300,300,"",["Hola","Soy una prueba","Murcia es muy bonito joder"],()=>{this.backToLocationScene();})
       
    }

     backToLocationScene(){
        this.scene.start('locationScene', {character: this.professor, skin: this.skin, inventory: this.inventory, 
            globalAura: this.globalAura, locationNode: this.locationNode, levelsCompleted: this.levelsCompleted
        });
    }
}
