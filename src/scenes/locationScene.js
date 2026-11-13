// Clase creada por Juan José de Reyna Godoy.

import locationsRegister from "../../objects/levelsRegister.js";

export class locationScene extends Phaser.Scene{

    constructor(){
        super({ key: 'locationScene' });
    }

    init(data){
        // Estas variables se usarán en esta escena
        this.professor = data.character;
        this.skin = data.skin;
        this.levelsCompleted = data.levelsCompleted;
        this.locationBackground = data.background;
        this.inventory = data.inventory;
        this.locationNode = data.locationNode;
        this.globalAura = data.globalAura;

        // Definir el aura que da 
        if(this.locationNode == 'arcade') this.auraToGive = auraArcade;
        else if(this.locationNode == 'crossing') this.auraToGive = auraCrossing;
        else if(this.locationNode == 'alley') this.auraToGive = auraAlley;
        else if(this.locationNode == 'seven_six_seven') this.auraToGive = auraShop;
    }

    create(){
        
        this.Background = this.add.image(0, 0, this.locationBackground).setOrigin(0, 0);

        
       const BackButton = this.add.image(0,0,'BackButton').setOrigin(0,0).setInteractive();

       BackButton.on('pointerdown',()=>{this.backToMap()});
       BackButton.on('pointerover',()=>{BackButton.setScale(1.1)});
       BackButton.on('pointerout',()=>{BackButton.setScale(1)});

       const NextButton = this.add.image(500 ,0,'BackButton').setOrigin(0,0).setInteractive();

       NextButton.on('pointerdown',()=>{this.goToLevel(null, 'battleBackgrArcade', ['u.', '', '', 'd.', 'l.', '', 'r.', 'u', '', 'd', 'l', '', 'r'], false)});
       NextButton.on('pointerover',()=>{BackButton.setScale(1.1)});
       NextButton.on('pointerout',()=>{BackButton.setScale(1)});
    }

    goToLevel(audio, nextBackground, moves, isCompleted){
        this.scene.start('testSong', {character: this.professor, skin: this.skin, song: audio, battleBackground: nextBackground, 
            locationBackground: this.locationBackground, movesArray: moves, thisLevelCompleted: isCompleted,
            auraToGive: this.auraToGive, inventory: this.inventory, locationNode: this.locationNode, globalAura: this.globalAura,
            levelsCompleted: this.levelsCompleted
        });
    }

    backToMap(){
        this.scene.start('japanLevelSelector', {character: this.professor, skin: this.skin, inventory: this.inventory, 
            globalAura: this.globalAura, locationNode: this.locationNode, levelsCompleted: this.levelsCompleted
        });
    }
}


const auraArcade = 10;
const auraShop = 10;
const auraCrossing = 10;
const auraAlley = 10;
