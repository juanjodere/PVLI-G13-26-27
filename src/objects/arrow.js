export default class arrow extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene,x,y,speed,type,state,dirX,dirY)
    {
        if(dirX ==  0 && dirY == 0)
        {
            console.log("STATIC ARROW");
        }
        super(scene,x,y,'arrow');
        this.setScale(0.1);

        this.speed = speed;
        this.arrowState = state;
        this.arrowType = type;
        this.dirX = dirX;
        this.dirY = dirY;
        
    switch(this.arrowType)
    {   
    
    case 'd':
        this.angle = 180;
    break;
    case 'l':
        this.angle = -90;
    break;
    case 'r':
         this.angle = 90;
    break;
    case 'u':
        this.angle = 0;
    break;
    default:
    console.log("INCORRECT ARROWTYPE");
    break;
    
    }
        if(this.arrowState)
        {
            this.setTint(0x0000ff);
        }
        else
        {
             this.setTint(0x008000);
        }
        //Fisica
          scene.physics.add.existing(this);
        this.body.allowGravity = false;
        //DEBUG
         this.body.showBody = true;
        //añadri a la escena
        scene.add.existing(this);
        scene.sys.updateList.add(this);

    }

    move(time,deltaTime)
    {
        this.x += this.dirX*this.speed*deltaTime;
        this.y += this.dirY**this.speed*deltaTime;
    }
    preUpdate(time,deltaTime)
    {
        this.move(time,deltaTime);
    }
}