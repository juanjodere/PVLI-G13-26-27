import mapNode from "../objects/mapNode.js";
import locationsRegister from "../objects/levelsRegister.js";
export class CharacterSelectorScene extends Phaser.Scene {

    constructor() {
        super({ key: "charSelScene" });
    }

    init(data){

        // Estas variables se usarán en esta escena
        this.inventory = data.inventory;
        this.globalAura = data.globalAura;
        this.initialNode = data.locationNode;

        // Estas se necesitan solo para pasar esta información a otra escena.
        this.levelsCompleted = data.levelsCompleted;
        console.log(this.levelsCompleted);
        
    }

    create() {
       
        //Las funciones las pasamos con ()=> porque si no javascript evalua la funcion en lugar de "Guardarla"
        this.Toni = new mapNode(this, 100, 300, 'alleyIco',()=>{selectCharacter(this,"Toni","Default")}).setOrigin(0.5, 0.5);
        this.Pablo = new mapNode(this, 350, 300, 'donQuijoteIco',()=>{selectCharacter(this,"Pablo","Default")}).setOrigin(0.5, 0.5);
        this.Isma = new mapNode(this, 600, 300, 'IsmaDefaultIdle',()=>{selectCharacter(this,"Isma","Default")}).setOrigin(0.5, 0.5);
       
        this.Toni.nodeRight = this.Pablo;
        this.Toni.nodeLeft = this.Isma;

        this.Pablo.nodeLeft = this.Toni;
        this.Pablo.nodeRight = this.Isma;
        
        this.Isma.nodeLeft = this.Pablo;
        this.Isma.nodeRight = this.Toni;

        this.selectedNode = this.Isma;
    }
   
}

function selectCharacter(thisScene,name,skin)
    {         
         thisScene.scene.start('japanLevelSelector', {
            character: name, skin: skin, levelsCompleted:thisScene.levelsCompleted, inventory: thisScene.inventory,
            locationNode: null, globalAura: 0
        })
        
    }