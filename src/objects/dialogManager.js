export default class dialogManager extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, dialogBox, text) {
        super(scene, x, y, dialogBox);

        this.index = 0;
        this.internalIndex = 0;

        this.writeDelay = 60;
        this.timer = 0;

        this.textArray = text;
        this.maxIndex = text.length; //RECUERDA ESCRIBIR LENGTH BIEN HKASLKFHAÑSFHIOEHG
        this.text = scene.add.text(x, y, text[this.index]).setOrigin(0.5);
        this.enter = scene.input.keyboard.addKey('ENTER');
        scene.add.existing(this);
    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        this.talk();
        this.updateText(deltaTime);
    }

    talk() {
        if (Phaser.Input.Keyboard.JustDown(this.enter)) {

            if (this.index < this.maxIndex) {
                ++this.index;
                this.text.text = ""
                this.internalIndex = 0;
            }
            else {

            }

        }
    }
    updateText(deltaTime) {
        if (this.index < this.maxIndex) {
            let max = this.textArray[this.index].length;
            if (this.internalIndex < max && this.timer > this.writeDelay) {
                this.text.text += this.textArray[this.index][this.internalIndex];
                this.internalIndex++;
                this.timer = 0;
            }
            else
            {
                this.timer += deltaTime;
            }
        }
    }

}