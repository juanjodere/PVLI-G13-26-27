import locationsRegister from "../../objects/levelsRegister.js";

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
      //Añadimos la imagen del fondo
      this.add.image(500,350,'menuBG')
     const StartButton = this.add.image(400,150,'startButton').setInteractive();
     const CreditsButton = this.add.image(400,350,'creditsButton').setInteractive();

     //Manejo del botón de los creditos
     CreditsButton.on('pointerdown',()=>{this.scene.start('CreditsScene')})
      CreditsButton.on('pointerover',()=>{CreditsButton.setScale(1.1)});
       CreditsButton.on('pointerout',()=>{CreditsButton.setScale(1)});
       //Manejo del botón de start
     
      StartButton.on('pointerdown',() => {

         let lvls = new locationsRegister();

         // Añadimos las localizaciones.
         lvls.addLocation('Arcade');
         lvls.addLocation('Crossing');
         lvls.addLocation('Allay');
         lvls.addLocation('SevenSixSeven');

         // Añadimos los niveles a cada una.
         // Arcade. Dos niveles.
         lvls.insertLevelOnlocation('Arcade');
         lvls.insertLevelOnlocation('Arcade');
         // Crossing. Un nivel.
         lvls.insertLevelOnlocation('Crossing');
         // Allay. Un nivel.
         lvls.insertLevelOnlocation('Allay');
         // SevenSixSeven. Un nivel.
         lvls.insertLevelOnlocation('SevenSixSeven');
         lvls.insertLevelOnlocation('SevenSixSeven');

         this.scene.start('japanLevelSelector', {character: null, skin: null, levelsCompleted: lvls, inventory: null,
            locationNode: null, globalAura: 0})
      })
      StartButton.on('pointerover',()=>{StartButton.setScale(1.1)});
      StartButton.on('pointerout',()=>{StartButton.setScale(1)});
    }
    update()
    {

    }

    //FUNCIONES DE FUERA
    //ATENCIÓN, SI SE USA THIS EN UNA FUNCION,HACE REFERENCIA A LA FUNCIÓN, NO A LA CLASE
     
}