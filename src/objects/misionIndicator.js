export default class misionIndicator extends Phaser.GameObjects.Sprite{

    constructor(scene,x,y,iconA,iconB,behaviour){

        super(scene,x,y,iconA);

        this.SpriteA = iconA;
        this.SpriteB = iconB;
        this.behaviour = behaviour;
        
        if(this.behaviour())
        {
           this.Sprite = this.SpriteA;
          
            if(!this.SpriteA){
                this.setVisible(false);
            }
            else
            {
                this.setVisible(true);
            }
        }
        else
        {
            this.Sprite  = this.SpriteB;
             if(!this.SpriteB){
                this.setVisible(false);
            }
            else
            {
                this.setVisible(true);
            }
        }
        console.log(this.Sprite);

        scene.add.existing(this);
    }
   
    preUpdate(time,deltaTime){
        super.preUpdate(time, deltaTime);
    }
}