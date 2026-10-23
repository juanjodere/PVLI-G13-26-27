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
        
        //Fisica, la añadimos aqui para ajustar el tamaño de lcolliderr segun la dir
          scene.physics.add.existing(this);

          //Ajustamos el tamaño del collider y la direccion de la flecha
    switch(this.arrowType)
    {   
    
    case 'd':
        this.angle = 180;
        this.body.setSize(1000,1500);
        
    break;
    case 'l':
        this.angle = -90;
        this.body.setSize(1500,100);
    break;
    case 'r':
         this.angle = 90;
         this.body.setSize(1500,100);
    break;
    case 'u':
        this.angle = 0;
        this.body.setSize(1000,1500);
    break;
    default:
    console.log("INCORRECT ARROWTYPE");
    break;
    
    }
    //SI la felcha tiene "estado" (es verde) se colorea verde
        if(this.arrowState)
        {
            this.setTint(0x008000);
        }
        else
        {
            this.setTint(0x0000ff);
        }
        
        
        //DEBUG
         this.body.showBody = true;
        //añadri a la escena
        scene.add.existing(this);
        scene.sys.updateList.add(this);

    }

    move(time,deltaTime)
    {
        //TODO BORRAR FLECHA AL SALIR DE LA PANTALLA
        this.x += this.dirX*this.speed*deltaTime;
        this.y += this.dirY**this.speed*deltaTime;
    }
    preUpdate(time,deltaTime)
    {
        this.move(time,deltaTime);
    }
}