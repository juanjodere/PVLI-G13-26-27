export class bootScene extends Phaser.Scene {

    constructor() {
        super({ key: "bootScene" })
    }

    preload() {
        //MainGameSceneAssets(PLACEHOLDER)
        this.load.image('playerSkin', 'assets/ObjectAssets/player/player.png');
        //MainMenuAssets
        {
        //MainMenuBackground
        this.load.image('menuBG', 'assets/MainMenuSceneAssets/mainMenuBackground.png')
        //ButtonAssets
        this.load.image('startButton', 'assets/MainMenuSceneAssets/StartButton.jpg');
        this.load.image('creditsButton', 'assets/MainMenuSceneAssets/CreditsButton.jpg');
        }
        //Arrow
        this.load.image('arrow', 'assets/ObjectAssets/arrow.png');
        //Iconos LevelSelector
        this.load.image('trainStationIco', 'assets/worldMapBuildings/trainStation_MapIcon.png');
        this.load.image('shibuyaCrossIco', 'assets/worldMapBuildigs/shibuyaCrossroad_MapIcon.png');
        this.load.image('alleyIco', 'assets/worldMapBuildings/alley_MapIcon.png');
        this.load.image('donQuijoteIco', 'assets/worldMapBuildings/donQuijoteStore_MapIcon.png');
        this.load.image('67elevenIco', 'assets/worldMapBuildings/67Eleven_MapIcon.png');
        this.load.image('arcadeIco','assets/worldMapBuildings/arcade_MapIcon.png');
        //MainMapBackground
        this.load.image('levelSelectorBG','./assets/ScenesBackgrounds/JapanLevelSelector/japanLevelSelectorMap.png')
        //levelBackgrounds

        //Carga de los spritesheets de los profesores y sus skins, se cargan con un nombre (nombre+skin)
        //Test
        this.load.spritesheet('defaultDefault','assets/ObjectAssets/player/testPlayer.png', {
            frameWidth:100,
            frameHeight:180,
            
            endFrame:4
        });
       
        //TODO REVISAR COMO FUNCIONA
        // Crear elementos visuales de la barra de carga
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 4, height / 2 - 30, width / 2, 50);

        // Escuchar el progreso de carga
        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 4 + 10, height / 2 - 20, (width / 2 - 20) * value, 30);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            this.scene.start('MainMenuScene');
        });
        //////////////////////////

    }
}