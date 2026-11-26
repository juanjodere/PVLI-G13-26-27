export default class player extends Phaser.GameObjects.Sprite{

    constructor(scene,x,y,{name,skin})
    {
        // se carga la versión idle
        super(scene, x, y, name + skin + 'Idle', 0);
        this.baseName = name + skin; // para facilitar el nombre
        scene.add.existing(this);
        // tiempo para resetear pose
        this.resetTimer = null;
    }

    // cambio de sprite para el baile
    changePose(pose, isSuccess){
        // si se estaba contando para volver al idle, se reinicia
        if(this.resetTimer){
            this.resetTimer.remove();
        }
        // la "dirección" de la pose en mayus para que no dé problemas
        let dir = pose.toUpperCase();
        // se comprueba si la pose es buena o mala
        let textureName = this.baseName + dir;
        if(!isSuccess){
            textureName = textureName + 'Fail'
        }
        // se cambia el sprite
        this.setTexture(textureName);
        // se prepara el temporizador
        this.resetTimer = this.scene.time.delayedCall(600, ()=>{
            this.setTexture(this.baseName + 'Idle');
        })
    }

    preUpdate(time,deltaTime)
    {
        super.preUpdate(time,deltaTime);
    }
}   