// Clase creada por Juan José de Reyna Godoy.

import { levels } from "../Data/data.js";
import locationsRegister from "../objects/levelsRegister.js";
import { misionCondition } from "../Data/data.js";
import mapNode from "../objects/mapNode.js"
import misionIndicator from "../objects/misionIndicator.js";

export class locationScene extends Phaser.Scene {

    constructor() {
        super({ key: 'locationScene' });
    }

    init(data) {
        // Estas variables se usarán en esta escena
        this.professor = data.character;
        this.skin = data.skin;
        this.levelsCompleted = data.levelsCompleted;
        this.inventory = data.inventory;
        this.locationNode = data.locationNode;
        this.globalAura = data.globalAura;

        this.locationBackground = data.background;
        this.startingDialog = data.startingDialog;
        this.level = data.level;
        this.mision = data.mision;


        // // Definir el aura que da 
        // if(this.locationNode == 'arcade') this.auraToGive = auraArcade;
        // else if(this.locationNode == 'crossing') this.auraToGive = auraCrossing;
        // else if(this.locationNode == 'alley') this.auraToGive = auraAlley;
        // else if(this.locationNode == 'seven_six_seven') this.auraToGive = auraShop;
    }

    create() {

        this.Background = this.add.image(0, 0, this.locationBackground).setOrigin(0, 0);
        //Configuramos el sufijo para elagir el dialogo que sea según si se cumple la mision o no
        if(this.levelsCompleted.checkMisionCondition(this.mision))
        {
        this.condition = "mision";
        }
        else
        {
            this.condition = "";
        }
        
        this.BackButton = new mapNode(this,100,100,'BackButton',()=>{this.backToMap()})//this.add.image(0, 0, 'BackButton').setOrigin(0, 0).setInteractive();

      /*   BackButton.on('pointerdown', () => { this.backToMap() });
        BackButton.on('pointerover', () => { BackButton.setScale(1.1) });
        BackButton.on('pointerout', () => { BackButton.setScale(1) });
 */
        this.TextButton =new mapNode(this,300,200,'BackButton',()=>{this.loadTextScene()}) //this.add.image(200, 200, 'BackButton').setOrigin(0, 0).setInteractive();
        this.misionIndicator = new misionIndicator(this,450,200,'alert','',()=>{return this.levelsCompleted.checkMisionCondition(this.mision)})
    
          this.selectedNode = this.TextButton;
         this.BackButton.nodeDown = this.TextButton;
         this.TextButton.nodeUp = this.BackButton;
         this.TextButton.nodeDown = BattleButton[0];
         this.TextButton.nodeLeft = this.BackButton;

         //Vamos a leer el nivel que metamos (da igual cual sea ya que todos comparten zona)
        let auxLevel = levels[this.level];
        //Vemos cuantos niveles tiene la zona especificada
        this.nLevels = this.levelsCompleted.returnNumberOfLevels(auxLevel.levelZone);

        //Creamos un nombre auxiliar, (este será igual al que hemos metido pero sin el ultimo número)
        let i = 0;
        //Vamos leyendo el nombre del nivel de entrada hasta tener nuestro auxiliar
        this.auxLevelName = '';
        while(this.level[i] != '0')
        {
         this.auxLevelName += this.level[i];
         i++;
        }
           //Este nombre lo usaremso para decirle al nodo de batalla a que batalla debe ir
         this.auxLevelName += '0';

      
        
        //Creamos un array de nodos
        const BattleButton=[];
        //Creamos los nodos de los niveles
        for(let i = 0 ; i<this.nLevels;i++)
        {
             BattleButton.push(new mapNode(this,300,300+100*i,'BackButton',()=>{this.goToLevel(this.auxLevelName+(i+1))}));
        }
        //Ajustamos el primer nodo de batalla (lo hacemos aparte porque necesita conectarse con text)
         BattleButton[0].nodeUp = this.TextButton;
         BattleButton[0].nodeLeft = this.BackButton;
         BattleButton[0].nodeDown = BattleButton[1];
       
        //Conectamos el resto de nodos de batalla conectando ese al anterior, al siguiente y al backbutton
        for(let i = 1 ; i<this.nLevels;i++)
        {
            //Conectamos este con el anterior
             BattleButton[i].nodeUp = BattleButton[i-1];
             BattleButton[i].nodeDown = BattleButton[i+1];
             BattleButton[i].nodeLeft = this.BackButton;
        }
      
    }
    goToLevel(level) {
        this.scene.start('testSong', {
            character: this.professor, skin: this.skin,
            locationBackground: this.locationBackground,
            inventory: this.inventory, locationNode: this.locationNode, globalAura: this.globalAura,
            levelsCompleted: this.levelsCompleted,
            level: level,startingDialog:this.startingDialog,
            mision:this.mision
        });
    }
    backToMap() {
        this.scene.stop();
        this.scene.wake('japanLevelSelector', {
            character: this.professor,
            skin: this.skin,
            inventory: this.inventory,
            globalAura: this.globalAura,
            locationNode: this.locationNode,
            levelsCompleted: this.levelsCompleted
        });
    }
    loadTextScene() {
        this.scene.start('dialogScene', {
            levelsCompleted: this.levelsCompleted,
            character: this.professor,
            skin: this.skin,
            inventory: this.inventory,
            globalAura: this.globalAura,
            initialNode: this.initialNode, text: "",
            background: this.locationBackground,
            startingDialog: this.startingDialog,
            condition:this.condition,
            level: this.level,
            mision:this.mision
        });
    }
}


const auraArcade = 10;
const auraShop = 10;
const auraCrossing = 10;
const auraAlley = 10;
