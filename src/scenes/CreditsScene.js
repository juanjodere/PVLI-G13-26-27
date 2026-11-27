export class CreditsScene extends Phaser.Scene
{
 constructor()
 {
    super({key:"CreditsScene"})
 }
  create()
  {
      const creditsBg = this.add.image(400,450,'creditsBG')
      creditsBg.setScale(0.3);
      //this.add.image(400,300,'Credits');
      const exitButton = this.add.image(20,25,'exitButton').setOrigin(0,0).setInteractive();
      // pintado de los nombres
      this.name1 = this.add.text(92, 167, 'Juan José de Reyna Godoy', {
         fontFamily: 'Comic Sans MS',
         fontSize: '50px',
         fill: '#ffffff',
         stroke: '#000000',
         strokeThickness: 4
      });
      this.name2 = this.add.text(92, 267, 'Leo Reyes Funk', {
         fontFamily: 'Comic Sans MS',
         fontSize: '50px',
         fill: '#ffffff',
         stroke: '#000000',
         strokeThickness: 4
      });
      this.name3 = this.add.text(92, 367, 'Alejandro Jiménez Rojo', {
         fontFamily: 'Comic Sans MS',
         fontSize: '50px',
         fill: '#ffffff',
         stroke: '#000000',
         strokeThickness: 4
      });

      exitButton.on('pointerdown',()=>{this.scene.start('MainMenuScene')});
      exitButton.on('pointerover',()=>{exitButton.setScale(1.1)});
      exitButton.on('pointerout',()=>{exitButton.setScale(1)});

      // tmb se puede salir con el escape
      this.input.keyboard.on('keydown-ESC', () => {
         this.scene.start('MainMenuScene');
      });
  }
}