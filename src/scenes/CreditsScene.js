export class CreditsScene extends Phaser.Scene
{
 constructor()
 {
    super({key:"CreditsScene"})
 }

  preload()
  {
    this.load.image('Credits','assets/CreditsSceneAssets/Credits.png');
    this.load.image('BackButton','assets/MainMenuSceneAssets/BackButton.jpg');
    
  }
  create()
  {
        this.add.image(400,300,'Credits');
       const BackButton = this.add.image(0,0,'BackButton').setOrigin(0,0).setInteractive();

       BackButton.on('pointerdown',()=>{this.scene.start('MainMenuScene')});
       BackButton.on('pointerover',()=>{BackButton.setScale(1.1)});
       BackButton.on('pointerout',()=>{BackButton.setScale(1)});
  }
  update()
  {

  }
}