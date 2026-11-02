export default class player extends Phaser.GameObjects.Sprite{

    constructor(scene,x,y,{name,skin})
    {
        super(scene,x,y,name+skin,0);

        this.WKey = scene.input.keyboard.addKey('W');
        this.AKey = scene.input.keyboard.addKey('A');
        this.SKey = scene.input.keyboard.addKey('S');
        this.DKey = scene.input.keyboard.addKey('D');
        this.switchKey = scene.input.keyboard.addKey('SPACE');
        scene.add.existing(this);

        //Creamos las animaciónes
        this.anims.create({

            key: 'Wanim',
            frames: this.anims.generateFrameNumbers(name+skin, { start: 0, end: 4 }),
            frameRate: 10,
            repeat: 1
        })
        this.anims.create({

            key: 'Aanim',
            frames: this.anims.generateFrameNumbers(name+skin, { start: 5, end: 9 }),
            frameRate: 10,
            repeat: 1
        })
        this.anims.create({

            key: 'Sanim',
            frames: this.anims.generateFrameNumbers(name+skin, { start: 10, end: 14 }),
            frameRate: 10,
            repeat: 1
        })
        this.anims.create({

            key: 'Danim',
            frames: this.anims.generateFrameNumbers(name+skin, { start: 15, end: 19 }),
            frameRate: 10,
            repeat: 1
        })

    }


    dance()
    {
        if(this.AKey.isDown)
        {
            this.play('Aanim',true);
        }
         if(this.SKey.isDown)
        {
            this.play('Sanim',true);
        }
         if(this.WKey.isDown)
        {
            this.play('Wanim',true);
        }
         if(this.DKey.isDown)
        {
            this.play('Danim',true);
        }
          

    }

    preUpdate(time,deltaTime)
    {
        super.preUpdate(time,deltaTime);
            this.dance(time,deltaTime);
    }
}   