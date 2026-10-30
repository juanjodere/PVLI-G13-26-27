import danceManager from "../../objects/danceManager.js";
import arrow from "../../objects/arrow.js";
import player from "../../objects/player.js";
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
        this.anims.create({

            key:'anim',
            frames:this.anims.generateFrameNumbers('defaultDefault',{start:0,end:4}),
            frameRate:10,
            repeat:-1
        })
        this.player = new player(this,300,300,{name:'default',skin:'Default'},'anim');
        this.player.play('anim');

        var array = ['u.','','','d.','l.','','r.','u','','d','l','','r']
         this._danceManager = new danceManager(this,{judgeLineSprite:'playerSkin',x:200,y:200,judgeLineSize:99,movesArray:array,music:null,arrowSpawnerX:500,arrowSpawnerY:200});
          
    }
    update(time,delta)
    {
        
    }
}