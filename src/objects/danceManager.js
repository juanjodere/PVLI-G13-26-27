import arrow from "./arrow.js";
import { levels } from "../Data/data.js";

export default class danceManager extends Phaser.Physics.Arcade.Sprite {
    //TODAS LAS COSAS ESTETICAS SE MANEJARAN EN OTROS OBJETOS; AQUI TENEMOS LA MUSICA EL SPRITE DE LA LINEA DE JUEZ (DONDE COLISIONAN LAS FLECHAS)
    //EL CONTROL DEL SPAWN DE FLECHAS Y EL MANEJO DEL INPUT PARA REVISAR LAS FLECHAS

    constructor(scene, data, isCompleted) {
        //CREAMOS EL SPRITE
        let auxLevel = levels[data];
        super(scene, auxLevel.x, auxLevel.y, auxLevel.judgeLineSprite)
        this.level = auxLevel;
        this.scene = scene;
        //Variables de la partida
        this.moves = this.level.movesArray;
        this.arrayLenght = this.moves.length;
        this.music = this.level.music;
        this.points = 0;
        this.combo = 0;
        this.topHealth = this.level.health; // Vida del jugador
        this.health = this.topHealth;
        this.auraToGive = this.level.aura;
        //SongController
        this.levelIsCompleted = isCompleted;
        this.songIndex = 0;
        this.timer = 0;
        this.betweenArrowTime = 1500;

        this.arrowSpawnerX = 500;
        this.arrowSpawnerY = 200;

        //GRUPO DE FISICAS arrow PARA TENER LAS FLECHAS GUARDADAS Y PROCESARLAS.
        this.arrowGroup = scene.physics.add.group({
            classType: arrow,
            maxSize: 15,
            allowGravity: false,
            runChildUpdate: true
        })
        this.arrowGroup.createMultiple(
            {
                quantity: 15,
                active: false
            }
        )


        //Controles
        this.WKey = scene.input.keyboard.addKey('W');
        this.AKey = scene.input.keyboard.addKey('A');
        this.SKey = scene.input.keyboard.addKey('S');
        this.DKey = scene.input.keyboard.addKey('D');
        this.YellowKey = scene.input.keyboard.addKey('J');
        this.PurpleKey = scene.input.keyboard.addKey('K');

        scene.add.existing(this);
        scene.sys.updateList.add(this);
        //ACTIVAMSO COLISIONES Y AÑADIMOS EL OBJETO A LA ESCENA
        scene.physics.add.existing(this);
        this.body.allowGravity = false;

        //Ponemos el tamaño del collider, no nos importa la altura

        this.body.setSize(this.level.judgeLineSize,this.level.judgeLineSize);
        this.body.showBody = true;

        this.CreateCollisionDetector();
    }
    spawnArrow(arrowType, YellowOrPurple) {


        //AÑADIMOS LA FLECHA AL GRUPO ARROWS.
        let _arrow = this.arrowGroup.get();
        if (_arrow) {
            _arrow.danceManager = this;
            _arrow.setActive(true);
            _arrow.setVisible(true);
            _arrow.setArrow({
                x: this.arrowSpawnerX, y: this.arrowSpawnerY, speed: 0.1, type: arrowType,
                state: YellowOrPurple, dirX: -1, dirY: 0
            })
        }

        // if (this.songIndex >= this.arrayLenght - 1) _arrow.isLast = true;
    }
    CreateCollisionDetector() {
        this.scene.physics.add.overlap(this, this.arrowGroup, (me, hitObject) => {
            this.InputProcessing(hitObject);
        })
    }
    InputProcessing(hitObject) {
        //Comprobamos que se haya presionado alguna tecla de las de movimiento para evitar psoibles errores
        if (this.WKey.isDown || this.AKey.isDown || this.SKey.isDown || this.DKey.isDown) 
        {
            //Si son lilas primero comprobamos que estemos presionano SOLO la tecla "Lila"
            if (hitObject.arrowState) 
            {
                if (this.YellowKey.isUp && this.PurpleKey.isDown) 
                {
                    switch (hitObject.arrowType) 
                    { // Empieza a leer los tipos de flecha.
                        case 'd':

                            if (this.SKey.isDown) {
                                this.onHit(hitObject)
                            }
                            else this.onMistake(hitObject);

                            break;
                        case 'l':

                            if (this.AKey.isDown) {
                                this.onHit(hitObject)
                            }
                            else this.onMistake(hitObject);

                            break;
                        case 'r':

                            if (this.DKey.isDown) {
                                this.onHit(hitObject)
                            }
                            else this.onMistake(hitObject);

                            break;
                        case 'u':

                            if (this.WKey.isDown) {
                                this.onHit(hitObject)
                            }
                            else this.onMistake(hitObject);
                            break;
                    }
                }
                else
                {this.onMistake(hitObject);}
            }
            //Si son Amarillas primero comprobamos que estemos presionano SOLO la tecla "Amarilla"
            else 
            {
                if (this.YellowKey.isDown && this.PurpleKey.isUp) 
                {
                    switch (hitObject.arrowType) 
                    { // Empieza a leer los tipos de flecha.
                    case 'd':

                        if (this.SKey.isDown) {
                            this.onHit(hitObject)
                        }
                        else this.onMistake(hitObject);

                        break;
                    case 'l':

                        if (this.AKey.isDown) {
                            this.onHit(hitObject)
                        }
                        else this.onMistake(hitObject);

                        break;
                    case 'r':

                        if (this.DKey.isDown) {
                            this.onHit(hitObject)
                        }
                        else this.onMistake(hitObject);

                        break;
                    case 'u':

                        if (this.WKey.isDown) {
                            this.onHit(hitObject)
                        }
                        else this.onMistake(hitObject);
                        break;
                    }
                }
                else
                {this.onMistake(hitObject);}
            }
        }
       

    }

    onMistake(hitObject) {

        hitObject.setActive(false);
        hitObject.setVisible(false);
        hitObject.y = 999;
        if (this.combo > 0) this.combo = 0; // Resetea el combo.

        if (this.health > 0) {

            this.health += --this.combo;
            if (this.health <= 0) {
                this.health = 0;
                this.updateBar(this.health);
                this.onLosing();
            }
            console.log(this.health);
            this.updateBar(this.health);
        };



    }
    onHit(hitObject) {
        hitObject.setActive(false);
        hitObject.setVisible(false);
        hitObject.y = 999;


        if (this.combo <= 0) this.combo = 1; // Resetea el combo.
        if (this.health < this.topHealth) {
            this.health += this.combo;
            if (this.health >= this.topHealth){ this.health = this.topHealth};
            console.log(this.health);
            this.updateBar(this.health);
        };

        this.hasSongEnded(hitObject);
    }

    updateBar(newHealth) {
        this.scene.changeLifeBar(newHealth);
    }
    onLosing() {
        this.askChangeScene()
    }
    hasSongEnded() {
        //Comprobamos que estamos al final de la canción y que no queda ninguna flecha activa
        if (this.songIndex >= this.arrayLenght && this.arrowGroup.getTotalUsed() == 0) {
            // Sumar dinero.

            if (!this.isCompleted) {
                console.log(this.scene.globalAura);
                this.scene.globalAura += this.auraToGive;
                //TODO COMPLETAR NIVEL REVISAR LEVERREGISTER


                this.scene.levelsCompleted.completeLevelOnLocation(this.level.levelZone, this.level.levelNumber);
                console.log(this.scene.globalAura);
            }
            this.askChangeScene();
        }
    }
    readArray(time, deltaTime) {
        //TODO ADD OUTSIDE SPAWN TIME OR SET IT CONSTANT (1000 ms)
        this.timer += deltaTime;
        if (this.timer > this.betweenArrowTime && this.songIndex < this.arrayLenght) {
            this.timer = 0;

            switch (this.moves[this.songIndex]) {
                //Yellow Arrows
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
                /////Purple ARROWS
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
        this.hasSongEnded();
    }
    askChangeScene() {
        this.scene.backToLocation();
    }
}
