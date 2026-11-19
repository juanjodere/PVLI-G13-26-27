export default class dialogManager extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, dialogBox, text) {
        super(scene, x, y, dialogBox);

        this.index = 0;
        this.text = add.text(x, y, text[this.index]);

        this.enter = scene.input.keyboard.addKey('ENTER');

        this.add.existing(this);
    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        this.talk();
    }

    talk() {
        if (this.enter.isDown) {
            ++index;

        }
    }

}