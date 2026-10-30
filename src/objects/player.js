export default class player extends Phaser.GameObjects.Sprite{

    constructor(scene,x,y,{name,skin},anim)
    {
        super(scene,x,y,name+skin,0);

        this.WKey = scene.input.keyboard.addKey('W');
        this.AKey = scene.input.keyboard.addKey('A');
        this.SKey = scene.input.keyboard.addKey('S');
        this.DKey = scene.input.keyboard.addKey('D');
        this.switchKey = scene.input.keyboard.addKey('SPACE');
        this.anim = anim;
        scene.add.existing(this);

    }


    dance()
    {
        
          

    }

    preupdate(time,deltaTime)
    {
        super.preupdate(time,deltatime);
            this.dance();
    }
}   