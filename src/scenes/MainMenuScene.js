export class MainMenuScene extends Phaser.Scene
{
 constructor()
 {
    super({key:"MainMenuScene"});
 }
    preload()
    {
      
    }
    create()
    {
     const StartButton = this.add.image(400,150,'startButton').setInteractive();
     const CreditsButton = this.add.image(400,350,'creditsButton').setInteractive();

     //Manejo del botón de los creditos
     CreditsButton.on('pointerdown',()=>{this.scene.start('CreditsScene')})
      CreditsButton.on('pointerover',()=>{CreditsButton.setScale(1.1)});
       CreditsButton.on('pointerout',()=>{CreditsButton.setScale(1)});
       //Manejo del botón de start
     
       StartButton.on('pointerdown',()=>{this.scene.start('japanLevelSelector')})
      StartButton.on('pointerover',()=>{StartButton.setScale(1.1)});
       StartButton.on('pointerout',()=>{StartButton.setScale(1)});
    }
    update()
    {

    }

    //FUNCIONES DE FUERA
    //ATENCIÓN, SI SE USA THIS EN UNA FUNCION,HACE REFERENCIA A LA FUNCIÓN, NO A LA CLASE
     
}