
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
        this.load.image('shibuyaCrossIco', 'assets/worldMapBuildings/shibuyaCrossroad_MapIcon.png');
        this.load.image('alleyIco', 'assets/worldMapBuildings/alley_MapIcon.png');
        this.load.image('donQuijoteIco', 'assets/worldMapBuildings/donQuijoteStore_MapIcon.png');
        this.load.image('67elevenIco', 'assets/worldMapBuildings/67Eleven_MapIcon.png');
        this.load.image('arcadeIco','assets/worldMapBuildings/arcade_MapIcon.png');
        //MainMapBackground
        this.load.image('levelSelectorBG','./assets/ScenesBackgrounds/JapanLevelSelector/japanLevelSelectorMap.png');
        //levelBackgrounds
        this.load.image('battleBackgrSixSeven', './assets/ScenesBackgrounds/SevenEleven/sevenElevenInside.JPG');
        this.load.image('locationBackgrSixSeven', './assets/ScenesBackgrounds/SevenEleven/sevenElevenMenu.jpg');
        this.load.image('battleBackgrArcade', './assets/ScenesBackgrounds/Arcade/arcadeInside.jpg');
        this.load.image('locationBackgrArcade', './assets/ScenesBackgrounds/Arcade/arcadeMenu.jpg');
        this.load.image('battleBackgrCrossing', './assets/ScenesBackgrounds/ShibuyaCrossing/shibuyaCrossingInside.png');
        this.load.image('locationBackgrCrossing', './assets/ScenesBackgrounds/ShibuyaCrossing/shibuyaCrossingMenu.jpg');
        // Credits images
        this.load.image('Credits','assets/CreditsSceneAssets/Credits.png');
        this.load.image('BackButton','assets/MainMenuSceneAssets/BackButton.jpg');
        //Imagenes para dialogos
        this.load.image('textBox', 'assets/ObjectAssets/textBox.png');
        //Cargamos los iconos del mapa de los profesores.
        this.load.image('IsmaDefaultIcon','assets/ObjectAssets/player/isma-default-icon.png');
        // se cargan las idles de los profes (nombre+skin) // de momento es un sprite, si da tiempo se hace spritesheet para animarlo
        this.load.image('IsmaDefaultIdle', 'assets/ObjectAssets/player/isma-default-idle.png');
        //Carga de los spritesheets de los profesores y sus skins, se cargan con un nombre (nombre+skin+move/+fail)
        this.load.image('IsmaDefaultWJ', 'assets/ObjectAssets/player/isma-default-wj.png');
        this.load.image('IsmaDefaultWJFail', 'assets/ObjectAssets/player/isma-default-wj-fail.png');
        this.load.image('IsmaDefaultWK', 'assets/ObjectAssets/player/isma-default-wk.png');
        this.load.image('IsmaDefaultWJFail', 'assets/ObjectAssets/player/isma-default-wk-fail.png');
        this.load.image('IsmaDefaultSJ', 'assets/ObjectAssets/player/isma-default-sj.png');
        this.load.image('IsmaDefaultSJFail', 'assets/ObjectAssets/player/isma-default-sj-fail.png');
        this.load.image('IsmaDefaultSK', 'assets/ObjectAssets/player/isma-default-sk.png');
        this.load.image('IsmaDefaultSKFail', 'assets/ObjectAssets/player/isma-default-sk-fail.png');
        this.load.image('IsmaDefaultAJ', 'assets/ObjectAssets/player/isma-default-aj.png');
        this.load.image('IsmaDefaultAJFail', 'assets/ObjectAssets/player/isma-default-aj-fail.png');
        this.load.image('IsmaDefaultAK', 'assets/ObjectAssets/player/isma-default-ak.png');
        this.load.image('IsmaDefaultAKFail', 'assets/ObjectAssets/player/isma-default-ak-fail.png');
        this.load.image('IsmaDefaultDJ', 'assets/ObjectAssets/player/isma-default-dj.png');
        this.load.image('IsmaDefaultDJFail', 'assets/ObjectAssets/player/isma-default-dj-fail.png');
        this.load.image('IsmaDefaultDK', 'assets/ObjectAssets/player/isma-default-dk.png');
        this.load.image('IsmaDefaultDKFail', 'assets/ObjectAssets/player/isma-default-dk-fail.png');
        //Test
        /*this.load.spritesheet('defaultDefault','assets/ObjectAssets/player/testPlayer.png', {
            frameWidth:100,
            frameHeight:180,
            
            endFrame:19
        });*/
        
       
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