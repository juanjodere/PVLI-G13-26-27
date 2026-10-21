export class bootScene extends Phaser.Scene{

        constructor()
        {
            super({key: "bootScene"})
        }

    preload()
    {
           //MainGameSceneAssets(PLACEHOLDER)
       this.load.image('playerSkin','assets/ObjectAssets/player/player.png');
        //MainMenuAssets
      this.load.image('startButton','assets/MainMenuSceneAssets/StartButton.jpg');
      this.load.image('creditsButton','assets/MainMenuSceneAssets/CreditsButton.jpg');

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