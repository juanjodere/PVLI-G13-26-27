export default class arrow extends Phaser.Physics.Arcade.Sprite
{

    isLast = false;

    constructor(scene, data)
    {

        if(data.dirX ==  0 && data.dirY == 0)
        {
            console.log("STATIC ARROW");
        }
        super(scene, data.x, data.y, 'arrow');
        this.setScale(0.1);

        this.speed = data.speed;
        this.arrowState = data.state;
        this.arrowType = data.type;
        this.dirX = data.dirX;
        this.dirY = data.dirY;
        
        //Fisica, la añadimos aqui para ajustar el tamaño del collider según la dir
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

        //SI la flecha tiene "estado" (es verde) se colorea verde
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

    get isLast(){
        return this.isLast;
    }

    set isLast(b){
        if (typeof b === "boolean") isLast = b;
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