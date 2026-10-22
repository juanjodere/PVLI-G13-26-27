export default class arrow extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene,x,y,speed,type,state)
    {
        super(scene,x,y,)

        this.speed = speed;
        this.arrowState = state;
        this.arrowType = type;
        //TODO GIRAR LA FLECHA SEGUN EL TIPO Y PONERLE EL COLOR SI ESTA EN MODO ARROWSTATE (A)
    }
}