import { dialogs } from "../Data/data.js";

export default class dialogManager extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, dialogBox, dialogNode) {
        super(scene, x, y, dialogBox);

        this.scene = scene;
        this.index = 0;
        this.internalIndex = 0;

        this.optionA = scene.add.sprite(x+200,y-50,'Abutton').setOrigin(0.5);
        this.optionB = scene.add.sprite(x+200,y+50,'Bbutton').setOrigin(0.5);

        //Constantes para frenar el texto
        this.writeDelay = 60;
        this.timer = 0;

        //Variables del texto (primer nodo y texto)
        this.node = dialogs[dialogNode];
        this.maxIndex = this.node.text.length;
        this.text = scene.add.text(x, y, this.node.text[this.index],{
             wordWrap: {
                width: 400,
                height:200
              }
        }).setOrigin(0.5);
        this.setDepth(-1);
        //Controles
        this.enter = scene.input.keyboard.addKey('ENTER');
        this.cursors = scene.input.keyboard.createCursorKeys();

        scene.add.existing(this);
    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        this.manageOptions(deltaTime);
        this.talk(deltaTime);
        this.updateText(deltaTime);
    }

    talk() {

        if (Phaser.Input.Keyboard.JustDown(this.enter)) {
            //Comprobamos hasta max-1 ya que si lo hacemos hasta max, se crea un dialogo vacio, debemos no entrar cuando ya estamos en el final
            if (this.index < this.maxIndex - 1) {
                ++this.index;
                this.text.text = ""
                this.internalIndex = 0;
            }
            else {
                //Comprobación cuando hemos terminado de leer el array de texto del nodo actual y queremos pasar al siguiente
                //Comprobamos si es uno de opciones o no (si tiene opciones hacemos el codigo, manejamos las opciones dentro del codigo action)
                if (this.node.choice) {
                      this.node.action();
                }
              
                //Si el siguiente nodo es nulo regresamos a la pantalla
                if(this.node.nextNode == null)
                {
                    this.scene.backToLocationScene();
                }
                else{
                //asignamos el siguiente nodo y limpiamos las variables en caso de haber otro nodo
                this.node = dialogs[this.node.nextNode];
                this.maxIndex = this.node.text.length;
                this.index = 0;
                this.internalIndex = 0;
                this.text.text = "";
                }


            }

        }
    }
    updateText(deltaTime) {
        if (this.index < this.maxIndex) {
            let max = this.node.text[this.index].length;
            if (this.internalIndex < max && this.timer > this.writeDelay) {
                this.text.text += this.node.text[this.index][this.internalIndex];
                this.internalIndex++;
                this.timer = 0;
            }
            else {
                this.timer += deltaTime;
            }
        }
    }
    manageOptions(deltaTime) {
        if (this.node.choice) {
            if (Phaser.Input.Keyboard.JustDown(this.cursors.down)) {
                this.node.currentOption = false;
            }
            else if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
                this.node.currentOption = true;
            }
            //Manejamos el tamaño de los nodos para hacerlos bonitos
            if(this.node.currentOption)
            {
                this.optionA.setScale(0.5,0.5);
                this.optionB.setScale(0.3,0.3);
            }
            else
            {
                this.optionB.setScale(0.5,0.5);
                this.optionA.setScale(0.3,0.3);
            }
        }
       this.optionA.visible = this.node.choice && this.index == this.maxIndex - 1 ;
       this.optionB.visible = this.node.choice && this.index == this.maxIndex - 1;

    }
}