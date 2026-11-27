import Inventory from "../objects/inventory.js";
import locationsRegister from "../objects/levelsRegister.js";


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
     const StartButton = this.add.image(400,400,'startButton').setInteractive();
     StartButton.setScale(1.5);
     const CreditsButton = this.add.image(400,500,'creditsButton').setInteractive();
     CreditsButton.setScale(1.5);

     //Manejo del botón de los creditos
      CreditsButton.on('pointerdown',()=>{this.scene.start('CreditsScene')})
      CreditsButton.on('pointerover',()=>{CreditsButton.setScale(1.7)});
      CreditsButton.on('pointerout',()=>{CreditsButton.setScale(1.5)});
       //Manejo del botón de start
     
      StartButton.on('pointerdown',() => {

         const lvls = new locationsRegister();

         // Añadimos las localizaciones con sus niveles.
         lvls.addLocation('Arcade',[false,false]);
         lvls.addLocation('Crossing',[false]);
         lvls.addLocation('Alley',[false]);
         lvls.addLocation('SevenSixSeven',[false,false]);

         this.scene.start('charSelScene', {character: null, skin: null, levelsCompleted: lvls, inventory: new Inventory(),
            locationNode: null, globalAura: 0})
      })
      StartButton.on('pointerover',()=>{StartButton.setScale(1.7)});
      StartButton.on('pointerout',()=>{StartButton.setScale(1.5)});
    }
    update()
    {

    }

    //FUNCIONES DE FUERA
    //ATENCIÓN, SI SE USA THIS EN UNA FUNCION,HACE REFERENCIA A LA FUNCIÓN, NO A LA CLASE
     
}