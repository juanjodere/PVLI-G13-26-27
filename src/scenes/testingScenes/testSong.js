import danceManager from "../../objects/danceManager.js";
import player from "../../objects/player.js";

export class testSong extends Phaser.Scene {

    constructor() {
        super({ key: 'testSong' });
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

        //Botón para salir del nivel PROVISIONAL
        const StartButton = this.add.image(0, 0, 'startButton').setInteractive().setOrigin(0, 0);
        StartButton.on('pointerdown', () => { this.scene.start('japanLevelSelector') })
        StartButton.on('pointerover', () => { StartButton.setScale(1.1) });
        StartButton.on('pointerout', () => { StartButton.setScale(1) });

        // Creamos la barra de vida
        this.progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(this.lifeBarLeftCornerX, this.lifeBarLeftCornerY, this.lifeBarWidth, this.lifeBarHeight);

        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(this.lifeBarLeftCornerX + this.lifeBarOffset, this.lifeBarLeftCornerY + this.lifeBarOffset, this.lifeBarWidth - 2*this.lifeBarOffset, this.lifeBarHeight - 2*this.lifeBarOffset);
        

        //CReamos al Jugador
        this.player = new player(this, 300, 300, { name: 'default', skin: 'Default' });

        var array = ['u.', '', '', 'd.', 'l.', '', 'r.', 'u', '', 'd', 'l', '', 'r']
        this._danceManager = new danceManager(this, { judgeLineSprite: 'playerSkin', x: 200, y: 200, judgeLineSize: 99, movesArray: array, music: null, aura: 25, health: this.health });

    }

    changeLifeBar(newLife){

        let oneLifePortion = (this.lifeBarHeight - 2*this.lifeBarOffset) / this.health;

        let updatedHeight = (oneLifePortion * newLife)

        let updatedYCorner = this.lifeBarLeftCornerY + this.lifeBarOffset + ( (this.lifeBarHeight - 2*this.lifeBarOffset) - updatedHeight);

        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(this.lifeBarLeftCornerX + this.lifeBarOffset, updatedYCorner, this.lifeBarWidth - 2*this.lifeBarOffset, updatedHeight)
    }
}