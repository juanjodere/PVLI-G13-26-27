import arrow from "./arrow.js";
export default class danceManager extends Phaser.Physics.Arcade.Sprite{
//TODAS LAS COSAS ESTETICAS SE MANEJARAN EN OTROS OBJETOS; AQUI TENEMOS LA MUSICA EL SPRITE DE LA LINEA DE JUEZ (DONDE COLISIONAN LAS FLECHAS)
//EL CONTROL DEL SPAWN DE FLECHAS Y EL MANEJO DEL INPUT PARA REVISAR LAS FLECHAS
    constructor(scene,judgeLineSprite,x,y,judgeLineSize,movesArray,music,arrowSpawnerX,arrowSpawnerY)
    {

    
        //CREAMOS EL SPRITE
        super(scene,x,y,judgeLineSprite)
        this.scene = scene;
        //Variables de la partida
        this.moves = movesArray;
        this.arrayLenght = movesArray.length;
        this.music = music;
        this.points = 0;
        this.combo = 0;
        //SongController
        this.songIndex = 0;
        this.timer = 0;

        this.arrowSpawnerX = arrowSpawnerX;
        this.arrowSpawnerY = arrowSpawnerY;

        this.greenState = false;
        //Controles
        this.playKey = scene.input.keyboard.addKey('SPACE') ;
        this.WKey = scene.input.keyboard.addKey('W') ;
        this.AKey = scene.input.keyboard.addKey('A') ;
        this.SKey = scene.input.keyboard.addKey('S') ;
        this.DKey = scene.input.keyboard.addKey('D') ;
        this.switchKey = scene.input.keyboard.addKey('SPACE') ;

         scene.add.existing(this);
         scene.sys.updateList.add(this);
        //ACTIVAMSO COLISIONES Y AÑADIMOS EL OBJETO A LA ESCENA
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        //Ponemos el tamaño del collider, no nos importa la Y
        
         this.body.setSize(judgeLineSize, judgeLineSize); 
         this.body.showBody = true;

        
         
    }
     spawnArrow(time,deltaTime,arrowType,greenState)
    {
        //TODO ADD OUTSIDE ARROW SPEED AND OUTSIDE AROW DIR
         let _arrow = new arrow(this.scene,this.arrowSpawnerX,this.arrowSpawnerY,0.1,arrowType,greenState,-1,0);
         this.scene.physics.add.collider(this, _arrow);
        
    }

    readArray(time,deltaTime)
    {
        //TODO ADD OUTSIDE SPAWN TIME OR SET IT CONSTANT (1000 ms)
        this.timer += deltaTime;
        
        // EL ARRAYLENGHT -1 ES PORQUE EL SONG INDEX SE SUMA DENTRO  DEL IF Y ENTONCES LEERIA LA SIGUIENTE A < DANDO UN SOLO ERROR
        if(this.timer > 1500 && this.songIndex < this.arrayLenght-1)
        {
            this.timer = 0;

            this.songIndex++;

        switch(this.moves[this.songIndex])
        {
            case 'u':
            this.spawnArrow(time,deltaTime,'u',false);
            break;
            case 'd':
            this.spawnArrow(time,deltaTime,'d',false);
            break;
            case 'l':
            this.spawnArrow(time,deltaTime,'l',false);
            break;
            case 'r':
            this.spawnArrow(time,deltaTime,'r',false);
            break;
            /////GREEN ARROWS
             case 'u.':
            this.spawnArrow(time,deltaTime,'u',true);
            break;
            case 'd.':
            this.spawnArrow(time,deltaTime,'d',true);
            break;
            case 'l.':
            this.spawnArrow(time,deltaTime,'l',true);
            break;
            case 'r.':
            this.spawnArrow(time,deltaTime,'r',true);
            //Delay
            break;
            case '':
                break;
            ///DEFAULT
            default:
                console.log("Incorrect movement at " + this.songIndex);
            break;
        }
        
        }

    }

    preUpdate(time,deltaTime)
    {
        super.preUpdate(time,deltaTime);
        this.readArray(time,deltaTime);
    }
}