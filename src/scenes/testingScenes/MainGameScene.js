export class MainGameScene extends Phaser.Scene
{
    constructor()
    {
        super({key:"MainGameScene"});
    }
    preload()
    {
        
    }
    create()
    {

   
        //Las flechas para los controles
        
        this.cursors = this.input.keyboard.createCursorKeys();

        this.runKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)
        //el jugador
       this.player = {
        sprite : this.add.sprite(400,300,'playerSkin'),
        speed : 100,
        walkSpeed: 100,
        runSpeed:200,
        //Importante lo de la flecha, si no la ponemos this hace referencia al objeto player, no tenemos las cosas de phaser. //this.player = player.player
        move: (delta) => {
  // Calculamos el paso exacto que debe dar según el tiempo del frame
        const moveStep = (this.player.speed * delta) / 1000;

        // Movimiento Horizontal
        if (this.cursors.left.isDown) {
            this.player.sprite.x -= moveStep;
        } else if (this.cursors.right.isDown) {
            this.player.sprite.x += moveStep;
        }
        

        // Movimiento Vertical
        if (this.cursors.up.isDown) {
            this.player.sprite.y -= moveStep;
        } else if (this.cursors.down.isDown) {
            this.player.sprite.y += moveStep;
        }

        },

        run: () =>{
            if(this.runKey.isDown)
            {
                this.player.speed = this.player.runSpeed;
            }
            else 
            {
                this.player.speed = this.player.walkSpeed;
            }
        }

       } 
       
       //this.cameras.main.startFollow(this.player.sprite);
       
    }
    update(time,delta)
    {
        this.player.move(delta);
        this.player.run();
    }
}