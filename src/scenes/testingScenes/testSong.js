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
       
        var array = ['u.','','','d.','l.','','r.','u','','d','l','','r']
         this._danceManager = new danceManager(this,'playerSkin',200,200,99,array,null,500,200);
          
    }
    update(time,delta)
    {
    
    }
}