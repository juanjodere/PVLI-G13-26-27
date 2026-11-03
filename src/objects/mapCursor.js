export default class mapCursor extends Phaser.GameObjects.Sprite{

    constructor(scene,x,y,Sprite)
    {
        super(scene,x,y,Sprite,0);
        
        this.speed = 1;
        this.Node = scene.selectedNode;


        scene.add.existing(this);
    }
    move(targetX,targetY,deltaTime){ 

        if(this.x > targetX + 3){
             this.x -= this.speed*deltaTime;
        }
        else if(this.x < targetX - 3)
        {
            this.x += this.speed*deltaTime;
        }

        if(this.y > targetY + 3){
             this.y -= this.speed*deltaTime;
        }
        else if(this.y < targetY - 3)
        {
            this.y += this.speed*deltaTime;
        }

    }
    preUpdate(time,deltaTime){
        super.preUpdate(time,deltaTime);
        this.move(this.Node.x,this.Node.y,deltaTime);
        this.Node = this.scene.selectedNode;
    }
}