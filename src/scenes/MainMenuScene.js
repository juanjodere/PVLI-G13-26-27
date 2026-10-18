export class MainMenuScene extends Phaser.Scene
{
 constructor()
 {
    super({key:"MainMenuScene"});
 }
    preload()
    {
      //Cargamos todos los assets de la escena
      //Cargamos las imagenes de los botones
      this.load.image('StartButton','assets/MainMenuSceneAssets/StartButton.jpg');
      this.load.image('CreditsButton','assets/MainMenuSceneAssets/CreditsButton.jpg');
    }
    create()
    {
     const StartButton = this.add.image(400,150,'StartButton').setInteractive();
     const CreditsButton = this.add.image(400,350,'CreditsButton').setInteractive();

     //Manejo del botón de los creditos
     CreditsButton.on('pointerdown',()=>{this.scene.start('CreditsScene')})
      CreditsButton.on('pointerover',()=>{CreditsButton.setScale(1.1)});
       CreditsButton.on('pointerout',()=>{CreditsButton.setScale(1)});
       //Manejo del botón de start
     
    }
    update()
    {

    }

    //FUNCIONES DE FUERA
    //ATENCIÓN, SI SE USA THIS EN UNA FUNCION,HACE REFERENCIA A LA FUNCIÓN, NO A LA CLASE
     
}