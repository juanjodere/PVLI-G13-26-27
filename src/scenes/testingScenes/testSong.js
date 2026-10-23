import danceManager from "../../objects/danceManager.js";
import arrow from "../../objects/arrow.js";
export class testSong extends Phaser.Scene{

    constructor()
    {
        super({key:'testSong'});
    }

    preload()
    {

    }
    create()
    {
        const StartButton = this.add.image(0,0,'startButton').setInteractive().setOrigin(0,0);
             StartButton.on('pointerdown',()=>{this.scene.start('japanLevelSelector')})
      StartButton.on('pointerover',()=>{StartButton.setScale(1.1)});
       StartButton.on('pointerout',()=>{StartButton.setScale(1)});
        var array = ['u.','','','d.','l.','','r.','u','','d','l','','r']
         this._danceManager = new danceManager(this,'playerSkin',200,200,99,array,null,500,200);
          
    }
    update(time,delta)
    {
    
    }
}