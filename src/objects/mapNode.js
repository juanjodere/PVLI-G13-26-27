export default class mapNode extends Phaser.GameObjects.Sprite
{
    constructor(scene,x,y,sprite,targetScene,_nodeUp,_nodeDown,_nodeLeft,_nodeRight)
    {

        super(scene,x,y,sprite,0);

        

        this.selected =false;

        this.nodeUp = _nodeUp;
        this.nodeDown = _nodeDown;
        this.nodeLeft = _nodeLeft;
        this.nodeRight =  _nodeRight;
        this.targetSceneName = targetScene;
        
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.enterKey = scene.input.keyboard.addKey('ENTER') ;

        //LO AÑADIMOS A LA ESCENA Y ADEMAS AL SYSTEMA DE UPDATE MUY IMPORTANTE
        scene.add.existing(this);

        scene.sys.updateList.add(this);
    }

    //Métodos de la clase mapNode;
    move(){
        
        //TODO CONTROLAR LA VELOCIDAD DE PULSACION
        if(this.selected)
        {
            // Movimiento entre nodos
        if (Phaser.Input.Keyboard.JustDown(this.cursors.left) && this.nodeLeft != null) {
            this.selected = false;
            this.nodeLeft.selected = true;
        } else if (Phaser.Input.Keyboard.JustDown(this.cursors.right)&& this.nodeRight != null) {
            this.selected = false;
            this.nodeRight.selected = true;
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.nodeUp != null) {
            this.selected = false;
            this.nodeUp.selected = true;
        } else if (Phaser.Input.Keyboard.JustDown(this.cursors.down)&& this.nodeDown != null) {
            this.selected = false;
            this.nodeDown.selected = true;
        }
        }
    }

    enter()
    {
        //TODO FIX LOADING SCENE IN OBEJCTS
        if(this.enterKey.isDown){
        this.scene.start(this.targetSceneName);
        }
    }
    resize()
    {
        if (this.selected)
        {
            this.setScale(1.3,1.3);
        }
        else
        {
            this.setScale(1,1);
        }
    }

//PReupdate imnportante para no tener que llamar al update  del objeto en la escena
    preUpdate(time,deltaTime)
    {
        
        super.preUpdate(time,deltaTime);
         this.enter();
        this.move();
        this.resize();
    }
}