import mapNode from "../objects/mapNode.js";
import mapCursor from "../objects/mapCursor.js";
export class japanLevelSelector extends Phaser.Scene {


    constructor() {
        super({ key: 'japanLevelSelector' })
    }

    create() {
        //Creamos el fondo
        this.Background = this.add.image(0, 0, 'levelSelectorBG').setOrigin(0, 0);

        //Creamos los nodos sin conectar
        this.alley = new mapNode(this, 734, 544, 'alleyIco', 'testSong').setOrigin(0.5, 0.5);
        this.donQuijote = new mapNode(this, 400, 67, 'donQuijoteIco', 'CreditsScene').setOrigin(0.5, 0.5);
        this.trainStation = new mapNode(this, 925, 434, 'trainStationIco', 'MainGameScene').setOrigin(0.5, 0.5);
        this.shibuyaCrossing = new mapNode(this, 777, 200, 'shibuyaCrossIco', 'MainGameScene').setOrigin(0.5, 0.5);
        this.arcade = new mapNode(this, 345, 245, 'arcadeIco', 'MainGameScene').setOrigin(0.5, 0.5);
        this.sixSevenStore = new mapNode(this, 365, 475, '67elevenIco', 'MainGameScene').setOrigin(0.5, 0.5);
        //Conectamos los nodos
        //DonQuijote
        this.donQuijote.nodeRight = this.shibuyaCrossing;
        this.donQuijote.nodeLeft = this.arcade;
        this.donQuijote.nodeDown = this.arcade;
        //CruzeShibuya
        this.shibuyaCrossing.nodeDown = this.trainStation;
         this.shibuyaCrossing.nodeRight = this.trainStation;
         this.shibuyaCrossing.nodeUp = this.donQuijote;
         this.shibuyaCrossing.nodeLeft = this.donQuijote;
        //Estación trenes
        this.trainStation.nodeLeft = this.alley;
        this.trainStation.nodeDown = this.alley;
        this.trainStation.nodeRight = this.shibuyaCrossing;
        this.trainStation.nodeUp = this.shibuyaCrossing;
        //Callejón
        this.alley.nodeLeft = this.sixSevenStore;
        this.alley.nodeUp = this.trainStation;
        this.alley.nodeRight = this.trainStation;
        //Tienda SixSeven
        this.sixSevenStore.nodeUp = this.arcade;
        this.sixSevenStore.nodeDown = this.alley;
        this.sixSevenStore.nodeRight = this.alley;
        this.sixSevenStore.nodeLeft = this.arcade;
        //Arcade
        this.arcade.nodeRight = this.donQuijote;
        this.arcade.nodeUp = this.donQuijote;
        this.arcade.nodeDown = this.sixSevenStore;
        this.nodeLeft = this.sixSevenStore;
     
        //asignamos la variable de nodo sele
        this.selectedNode = this.donQuijote;
        //Creamos el iconito del jugador;
        this.cursor = new mapCursor(this, this.selectedNode.x, this.selectedNode.y, 'playerSkin').setOrigin(0.5, 0.5).setScale(0.3, 0.3);
        this.cameras.main.startFollow(this.cursor);
        this.cameras.main.setBounds(0, 0, 1358, 802);
        //this.Background.setScale(2,2);
    }

    update(time, deltaTime) {

    }
};