export default class arrow extends Phaser.Physics.Arcade.Sprite
{

    isLast = false;

    constructor(scene)
    {
        
       
        super(scene, 999, 999, 'arrow');

        //this.danceManager = scene.danceManager;
       
        
        
        //Fisica, la añadimos aqui para ajustar el tamaño del collider según la dir
        scene.physics.add.existing(this);

        
        
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
        this.y += this.dirY*this.speed*deltaTime;
        //Si nos salimso del mapa hemos fallado
        if(this.x < -50)
        {
            this.danceManager.onMistake(this);
        }
    }

    preUpdate(time,deltaTime)
    {
        this.move(time,deltaTime);
    }

    setArrow(data)
    {
        this.x = data.x;
        this.y = data.y;
          if(data.dirX ==  0 && data.dirY == 0)
        {
            console.log("STATIC ARROW");
        }
        this.setScale(0.1);

        this.speed = data.speed;
        this.arrowState = data.state;
        this.arrowType = data.type;
        this.dirX = data.dirX;
        this.dirY = data.dirY;

        
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

        
        if(this.arrowState)
        {
            //Lavanda (K)
            this.setTint(0xe8bbff);
        }
        else
        {
            //Amarillo(J)
            this.setTint(0xffd398);
        }
    }
}