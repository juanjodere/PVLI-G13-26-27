import danceManager from "../../objects/danceManager.js";
import player from "../../objects/player.js";
import locationsRegister from "../../objects/levelsRegister.js";
import { levels } from "../../Data/data.js";

export class testSong extends Phaser.Scene {

    constructor() {
        super({ key: 'testSong' });
    }


    init(data) {
        // Estas variables se usarán en esta escena
        this.professor = data.character;
        this.skin = data.skin;
        this.locationBackground = data.locationBackground;
        this.inventory = data.inventory;
        this.locationNode = data.locationNode;
        this.globalAura = data.globalAura;

        // Estas variables están para pasarlas a otras escenas.
        this.levelsCompleted = data.levelsCompleted;
        this.level = data.level;
        this.startingDialog = data.startingDialog;
    }


    create() {

        let levelData = levels[this.level];

        // se pinta el fondo
        if(levelData && levelData.background){
            this.add.image(0, 0, levelData.background).setOrigin(0, 0).setScale(levelData.bgScale);
        }

        // barrita por donde pasan las flechas
        this.trackBar = this.add.rectangle(400, 130, 800, 67, 0xAAAAAA, 0.67).setDepth(0); 

        this.lifeBarLeftCornerX = 675;
        this.lifeBarInitialLeftCornerY = 50;
        this.lifeBarLeftCornerY = this.lifeBarInitialLeftCornerY;
        this.lifeBarWidth = 75;
        this.lifeBarInitialHeight = 500;
        this.lifeBarHeight = this.lifeBarInitialHeight;
        this.lifeBarOffset = 10;

        // Creamos la barra de vida
        this.progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(this.lifeBarLeftCornerX, this.lifeBarLeftCornerY, this.lifeBarWidth, this.lifeBarHeight);
        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(this.lifeBarLeftCornerX + this.lifeBarOffset, this.lifeBarLeftCornerY + this.lifeBarOffset,
        this.lifeBarWidth - 2 * this.lifeBarOffset, this.lifeBarHeight - 2 * this.lifeBarOffset);

        // pintado del combo
        this.comboText = this.add.text(50, 510, 'Combo x0', {
        fontFamily: 'Comic Sans MS',
        fontSize: '35px',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4
        });

        // Creamos al Jugador
        this.player = new player(this, 400, 400, {name: this.professor, skin:this.skin });
        this.player.setScale(0.4);
        
        //Leemos la salud del archivo (Para la barra)
        this.health = levelData.health;


        let completed = this.levelsCompleted.returnIfLevelCompletedOnLocation(levelData.levelZone, levelData.levelNumber);
        //Pasamos level (el nombre del nivel no el objeto como tal) para luego buscarlo dentro del dance manager
        this.danceManager = new danceManager(this,this.level, completed)

        // ponemos la música
        this.song = this.sound.add(levelData.music, {
            loop: false,
            volume: 0.8
        })
        if(this.song){ // evitar que dé error si no hay canción
            this.song.play();
        
            // listener para que se complete el nivel cuando la canción termine
            this.song.once('complete', () => {
            this.onSongFinished();
            });
        }

        // al darle a escape puedes salir del nivel
        this.input.keyboard.on('keydown-ESC', () => {
            this.backToLocation();
        });
    }


    changeLifeBar(newLife) {

        let oneLifePortion = (this.lifeBarHeight - 2 * this.lifeBarOffset) / this.health;

        let updatedHeight = (oneLifePortion * newLife)

        let updatedYCorner = this.lifeBarLeftCornerY + this.lifeBarOffset + ((this.lifeBarHeight - 2 * this.lifeBarOffset) - updatedHeight);

        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(this.lifeBarLeftCornerX + this.lifeBarOffset, updatedYCorner, this.lifeBarWidth - 2 * this.lifeBarOffset, updatedHeight)
    }

    // para actualizar el pintado del combo
    updateCombo(newCombo){
        if(this.comboText){
            if(newCombo > 0){
                // se actualiza el texto
                this.comboText.setText('Combo x' + newCombo);
                this.comboText.setVisible(true);
                // efecto visual mwehehe
                this.tweens.add({
                    targets: this.comboText,
                    scale: { from: 1.3, to: 1 },
                    duration: 100
                });
            }
            else{ // si el combo es 0 no se muestra
                this.comboText.setText('');
            }
        }
    }

    // cuando termina la canción
    onSongFinished() {
        if (!this.danceManager.levelIsCompleted) {
            this.globalAura += this.danceManager.auraToGive;
            this.levelsCompleted.completeLevelOnLocation(this.danceManager.level.levelZone, this.danceManager.level.levelNumber);
        }
        this.backToLocation();
    }

    backToLocation() {
        //se para la música
        if(this.song){
            this.song.stop();
        }

        this.scene.start('locationScene', {
            character: this.professor, skin: this.skin, levelsCompleted: this.levelsCompleted,
            background: this.locationBackground, inventory: this.inventory, locationNode: this.locationNode,
            globalAura: this.globalAura,
            level:this.level,
           startingDialog: this.startingDialog
        });

    }
}