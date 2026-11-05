import danceManager from "../../objects/danceManager.js";
import player from "../../objects/player.js";

export class testSong extends Phaser.Scene {

    constructor() {
        super({ key: 'testSong' });
    }

    
    init(data)
    {
        // Estas variables se usarán en esta escena
        this.professor = data.character;
        this.skin = data.skin;
        this.song = data.song;
        this.background = data.background;
        this.array = data.movesArray;
        this.sendAura = !data.thisLevelCompleted;
        this.auraToGive = data.givenAura;
        this.inventory = data.inventory;
        this.locationNode = data.locationNode;
        this.globalAura = data.globalAura;

        // Estas variables están para pasarlas a otras escenas.
        this.levelsCompleted = data.levelsCompleted;
    }


    create() {

        this.lifeBarLeftCornerX = 675;
        this.lifeBarInitialLeftCornerY = 25;
        this.lifeBarLeftCornerY = this.lifeBarInitialLeftCornerY;
        this.lifeBarWidth = 75;
        this.lifeBarInitialHeight = 500;
        this.lifeBarHeight = this.lifeBarInitialHeight;
        this.lifeBarOffset = 10;

        this.health = 10;
        
        // Creamos la barra de vida
        this.progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(this.lifeBarLeftCornerX, this.lifeBarLeftCornerY, this.lifeBarWidth, this.lifeBarHeight);

        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(this.lifeBarLeftCornerX + this.lifeBarOffset, this.lifeBarLeftCornerY + this.lifeBarOffset,
            this.lifeBarWidth - 2*this.lifeBarOffset, this.lifeBarHeight - 2*this.lifeBarOffset);
        

        // Creamos al Jugador
        this.player = new player(this, 300, 300, { name: 'default', skin: 'Default' });
        
        this._danceManager = new danceManager(this, { judgeLineSprite: 'playerSkin', x: 200, y: 200, judgeLineSize: 99,
            movesArray: this.array, music: this.song, aura: this.auraToGive, health: this.health });
        

        //this.array = ['u.', '', '', 'd.', 'l.', '', 'r.', 'u', '', 'd', 'l', '', 'r']
    }


    changeLifeBar(newLife){

        let oneLifePortion = (this.lifeBarHeight - 2*this.lifeBarOffset) / this.health;

        let updatedHeight = (oneLifePortion * newLife)

        let updatedYCorner = this.lifeBarLeftCornerY + this.lifeBarOffset + ( (this.lifeBarHeight - 2*this.lifeBarOffset) - updatedHeight);

        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(this.lifeBarLeftCornerX + this.lifeBarOffset, updatedYCorner, this.lifeBarWidth - 2*this.lifeBarOffset, updatedHeight)
    }


    changeScene(){
        
        this.scene.start('japanLevelSelector', {character: this.character, skin: this.skin, levelsCompleted: this.levelsCompleted,
            inventory: this.inventory, locationNode: this.locationNode, globalAura: this.globalAura})
    }
}