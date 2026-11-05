//Objeto que nos permtie crear nodos en el mapa por los que irnos moviendo, un nodo se puede conectar a un maximo de 4 nodos
//dos nodos no necesitan estar conectados entre si 
export default class mapNode extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, sprite, _nodeUp = null, _nodeDown = null, _nodeLeft = null, _nodeRight = null)
    {
        super(scene, x, y, sprite, 0);

        this.selected = false;

        this.nodeUp = _nodeUp;
        this.nodeDown = _nodeDown;
        this.nodeLeft = _nodeLeft;
        this.nodeRight =  _nodeRight;
        //this.targetSceneName = 'testSong';  Esto no es necesario si es la escena del mapa la que inicia la escena del nivel
        // El nodo le pasará a la escena la información necesaria para iniciar la escena de la zona.
        
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.enterKey = scene.input.keyboard.addKey('ENTER') ;

        //LO AÑADIMOS A LA ESCENA Y ADEMAS AL SYSTEMA DE UPDATE MUY IMPORTANTE
        scene.add.existing(this);

        scene.sys.updateList.add(this);
    }

    //Métodos de la clase mapNode;
    move(){
        
        if (this.scene.selectedNode == this)
        {
            this.selected = true;
        }
        else
        {
            this.selected = false;
        }

        //TODO CONTROLAR LA VELOCIDAD DE PULSACION

        if(this.selected)
        {

            // Movimiento entre nodos
        if (Phaser.Input.Keyboard.JustDown(this.cursors.left) && this.nodeLeft != null) {

            this.selected = false;
            this.nodeLeft.selected = true;
            this.scene.selectedNode = this.nodeLeft;

        } else if (Phaser.Input.Keyboard.JustDown(this.cursors.right)&& this.nodeRight != null) {

            this.selected = false;
            this.nodeRight.selected = true;
            this.scene.selectedNode = this.nodeRight;

        }
        if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.nodeUp != null) {

            this.selected = false;
            this.nodeUp.selected = true;
            this.scene.selectedNode = this.nodeUp;

        } else if (Phaser.Input.Keyboard.JustDown(this.cursors.down)&& this.nodeDown != null) {

            this.selected = false;
            this.nodeDown.selected = true;
            this.scene.selectedNode = this.nodeDown;

        }

        }
    }


    enter()
    {
        //TODO FIX LOADING SCENE IN OBEJCTS
        if (this.enterKey.isDown && this.selected){ 
            this.askChangeScene();
        }
    }


    resize()
    {
        if (this.selected)
        {
            this.setScale(0.5,0.5);
        }
        else
        {
            this.setScale(0.35,0.35);
        }
    }

    //Preupdate importante para no tener que llamar al update del objeto en la escena
    preUpdate(time, deltaTime)
    {
        super.preUpdate(time, deltaTime);
        this.enter();
        this.move();
        this.resize();
    }


    askChangeScene(){
        this.scene.enterLevel(null, null, ['u.', '', '', 'd.', 'l.', '', 'r.', 'u', '', 'd', 'l', '', 'r'], 0, " ");
    }
}