export class CreditsScene extends Phaser.Scene
{
 constructor()
 {
    super({key:"CreditsScene"})
 }
  create()
  {
        this.add.image(400,300,'Credits');
       const exitButton = this.add.image(20,50,'exitButton').setOrigin(0,0).setInteractive();

       exitButton.on('pointerdown',()=>{this.scene.start('MainMenuScene')});
       exitButton.on('pointerover',()=>{exitButton.setScale(1.1)});
       exitButton.on('pointerout',()=>{exitButton.setScale(1)});
  }
}