export default class danceManager extends Phaser.Physics.Arcade.Sprite{
//TODAS LAS COSAS ESTETICAS SE MANEJARAN EN OTROS OBJETOS; AQUI TENEMOS LA MUSICA EL SPRITE DE LA LINEA DE JUEZ (DONDE COLISIONAN LAS FLECHAS)
//EL CONTROL DEL SPAWN DE FLECHAS Y EL MANEJO DEL INPUT PARA REVISAR LAS FLECHAS
    constructor(scene,judgeLineSprite,x,y,judgeLineSize,movesArray,music,arrowSpawnerX,arrowSpawnerY)
    {
        //CREAMOS EL SPRITE
        super(scene,x,y,judgeLineSprite)
        //Variables de la partida
        this.moves = movesArray;
        this.music = music;
        this.points = 0;
        this.combo = 0;

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
     spawnArrow()
    {
        this.scene.physics.add.collider(this, target);
    }
    preUpdate(time,deltaTime)
    {
        super.preUpdate(time,deltaTime);
    }
}