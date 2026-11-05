import arrow from "./arrow.js";

export default class danceManager extends Phaser.Physics.Arcade.Sprite {
    //TODAS LAS COSAS ESTETICAS SE MANEJARAN EN OTROS OBJETOS; AQUI TENEMOS LA MUSICA EL SPRITE DE LA LINEA DE JUEZ (DONDE COLISIONAN LAS FLECHAS)
    //EL CONTROL DEL SPAWN DE FLECHAS Y EL MANEJO DEL INPUT PARA REVISAR LAS FLECHAS

    constructor(scene, data) {
        //CREAMOS EL SPRITE
        super(scene, data.x, data.y, data.judgeLineSprite)
        this.scene = scene;
        //Variables de la partida
        this.moves = data.movesArray;
        this.arrayLenght = this.moves.length;
        this.music = data.music;
        this.points = 0;
        this.combo = 0;
        this.topHealth = data.health; // Vida del jugador
        this.health = this.topHealth;
        this.auraToGive = data.aura;
        //SongController
        this.songIndex = 0;
        this.timer = 0;
        this.betweenArrowTime = 1500;

        this.arrowSpawnerX = 500;
        this.arrowSpawnerY = 200;

        //GRUPO DE FISICAS arrow PARA TENER LAS FLECHAS GUARDADAS Y PROCESARLAS.
        this.arrowGroup = scene.physics.add.group({
            allowGravity: false
        })


        //Controles
        this.WKey = scene.input.keyboard.addKey('W');
        this.AKey = scene.input.keyboard.addKey('A');
        this.SKey = scene.input.keyboard.addKey('S');
        this.DKey = scene.input.keyboard.addKey('D');
        this.switchKey = scene.input.keyboard.addKey('SPACE');

        scene.add.existing(this);
        scene.sys.updateList.add(this);
        //ACTIVAMSO COLISIONES Y AÑADIMOS EL OBJETO A LA ESCENA
        scene.physics.add.existing(this);
        this.body.allowGravity = false;

        //Ponemos el tamaño del collider, no nos importa la altura
        this.body.setSize(data.judgeLineSize, data.judgeLineSize);
        this.body.showBody = true;

        this.CreateCollisionDetector();
    }

    spawnArrow(arrowType, isGreen) {

        //TODO ADD OUTSIDE ARROW SPEED AND OUTSIDE AROW DIR

        let _arrow = new arrow(this.scene, {x: this.arrowSpawnerX, y: this.arrowSpawnerY, speed: 0.1, type: arrowType,
            state: isGreen, dirX: -1, dirY: 0});
        this.scene.physics.add.collider(this, _arrow);

        //AÑADIMOS LA FLECHA AL GRUPO ARROWS.
        this.arrowGroup.add(_arrow)

        if (this.songIndex >= this.arrayLenght - 1) _arrow.isLast = true;
    }

    CreateCollisionDetector() {
        this.scene.physics.add.overlap(this, this.arrowGroup, (me, hitObject) => {
            this.InputProcessing(hitObject);
        })
    }

    InputProcessing(hitObject) {
        
        if (this.SKey.isDown || this.AKey.isDown || this.DKey.isDown || this.WKey.isDown){ // Si se ha presionado alguna tecla.
            
            if((hitObject.arrowState && this.switchKey.isDown) || (!hitObject.arrowState && this.switchKey.isUp)){ // Si el tipo de flecha es correcto.

                switch (hitObject.arrowType) { // Empieza a leer los tipos de flecha.
                    case 'd':

                    if(this.SKey.isDown)
                    {
                        this.onHit(hitObject)
                    }
                    else this.onMistake(hitObject);

                    break;
                    case 'l':

                    if(this.AKey.isDown)
                    {
                        this.onHit(hitObject)
                    }
                    else this.onMistake(hitObject);

                    break;
                    case 'r':

                    if(this.DKey.isDown)
                    {
                        this.onHit(hitObject)
                    }
                  else this.onMistake(hitObject);

                    break;
                    case 'u':

                    if(this.WKey.isDown)
                    {
                        this.onHit(hitObject)
                    }
                    else this.onMistake(hitObject);

                    break;
                }  
            }
            else this.onMistake(hitObject);
            
        }
    }

    onMistake(hitObject){
        
        hitObject.x = 9999;
        if (this.combo > 0) this.combo = 0; // Resetea el combo.
        
        if (this.health > 0) {
            this.health += --this.combo;
            if (this.health <= 0){
                this.health = 0;
                this.updateBar(this.health);
                this.onLosing();
            }

            this.updateBar(this.health);
        };

        this.hasSongEnded(hitObject);

    }

    onHit(hitObject){
        hitObject.x = 9999;

        
        if (this.combo <= 0) this.combo = 1; // Resetea el combo.
        if (this.health < this.topHealth) {
            this.health += this.combo;
            if (this.health > this.topHealth) this.health = this.topHealth;

            this.updateBar(this.health);
        };

        this.hasSongEnded(hitObject);
    }

    updateBar(newHealth){
        this.scene.changeLifeBar(newHealth);
    }

    onLosing(){
        this.askChangeScene()
    }

    hasSongEnded(hitObject){

        if (hitObject.isLast == true){
            // Sumar dinero.
            // Sumar auraToGive a globalAura.
            this.askChangeScene();
        }
    }

    readArray(time, deltaTime) {
        //TODO ADD OUTSIDE SPAWN TIME OR SET IT CONSTANT (1000 ms)
        this.timer += deltaTime;

        // EL ARRAYLENGHT -1 ES PORQUE EL SONG INDEX SE SUMA DENTRO  DEL IF Y ENTONCES LEERIA LA SIGUIENTE A < DANDO UN SOLO ERROR
        if (this.timer > this.betweenArrowTime && this.songIndex < this.arrayLenght) {
            this.timer = 0;

            switch (this.moves[this.songIndex]) {
                case 'u':
                    this.spawnArrow('u', false);
                    break;
                case 'd':
                    this.spawnArrow('d', false);
                    break;
                case 'l':
                    this.spawnArrow('l', false);
                    break;
                case 'r':
                    this.spawnArrow('r', false);
                    break;
                /////GREEN ARROWS
                case 'u.':
                    this.spawnArrow('u', true);
                    break;
                case 'd.':
                    this.spawnArrow('d', true);
                    break;
                case 'l.':
                    this.spawnArrow('l', true);
                    break;
                case 'r.':
                    this.spawnArrow('r', true);
                    //Delay
                    break;
                case '':
                    break;
                ///DEFAULT
                default:
                    console.log("Incorrect movement at " + this.songIndex);
                    break;
            }

            this.songIndex++;

        }

    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        this.readArray(time, deltaTime);
    }

    askChangeScene(){
        this.scene.changeScene();
    }
}