import danceManager from "../../objects/danceManager.js";
import arrow from "../../objects/arrow.js";
import player from "../../objects/player.js";
export class testSong extends Phaser.Scene {

    constructor() {
        super({ key: 'testSong' });
    }

    create() {
        //Botón para salir del nivel PROVISIONAL
        const StartButton = this.add.image(0, 0, 'startButton').setInteractive().setOrigin(0, 0);
        StartButton.on('pointerdown', () => { this.scene.start('japanLevelSelector') })
        StartButton.on('pointerover', () => { StartButton.setScale(1.1) });
        StartButton.on('pointerout', () => { StartButton.setScale(1) });


        


        //CReamos al Jugador
        this.player = new player(this, 300, 300, { name: 'default', skin: 'Default' });

        var array = ['u.', '', '', 'd.', 'l.', '', 'r.', 'u', '', 'd', 'l', '', 'r']
        this._danceManager = new danceManager(this, { judgeLineSprite: 'playerSkin', x: 200, y: 200, judgeLineSize: 99, movesArray: array, music: null, arrowSpawnerX: 500, arrowSpawnerY: 200 });

    }
}