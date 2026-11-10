// Clase creada por Juan José de Reyna Godoy.

const auraArcade = 10;

const auraCrossing = 10;

export class locationScene extends Phaser.scene{

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
    }

    create(){

        

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