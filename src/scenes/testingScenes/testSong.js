import danceManager from "../../objects/danceManager.js";
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
        let array = new Array('u.',' ','d.','l.',' ','r.','u',' ','d','l',' ','r',)
         this._danceManager = new danceManager(this,'playerSkin',200,200,99,null,null,99,99);
    }
    update(time,delta)
    {

    }
}