// Clase creada por Juan José de Reyna Godoy.

import Item from "../objects/item.js"
import Inventory from "../objects/inventory.js";

export class shopScene extends Phaser.Scene {

    constructor(){
        super({ key: 'shopScene' });
    }

    init(data){

        this.professor = data.character;
        this.skin = data.skin;
        this.levelsCompleted = data.levelsCompleted;
        this.locationBackground = data.background;
        this.inventory = data.inventory;
        this.locationNode = data.locationNode;
        this.globalAura = data.globalAura;
        this.dialog = data.startingDialog;

    }

    create(){

        this.inventory.addMoney(30);

        this.Background = this.add.image(0, 0, this.locationBackground).setOrigin(0, 0);

        const BackButton = this.add.image(0,0,'BackButton').setOrigin(0,0).setInteractive(); // Botón de vuelta.
        BackButton.on('pointerdown',()=>{this.backToMap()});
        BackButton.on('pointerover',()=>{BackButton.setScale(1.1)});
        BackButton.on('pointerout',()=>{BackButton.setScale(1)});

        const SkinBotton = this.add.image(100,100,'BackButton').setOrigin(0, 0).setInteractive(); // Botón de vuelta.
        SkinBotton.on('pointerdown',()=>{this.buyObject(new Item (this, 900, 100, '67elevenIco', "skin", 0)); this.renderInventory()});

        const missionBotton = this.add.image(100,300,'BackButton').setOrigin(0, 0).setInteractive(); // Botón de vuelta.
        missionBotton.on('pointerdown',()=>{this.buyObject(new Item (this, 900, 300, 'trainStationIco', "mission", 0)); this.renderInventory()});

        const collectBotton = this.add.image(100,500,'BackButton').setOrigin(0, 0).setInteractive(); // Botón de vuelta.
        collectBotton.on('pointerdown',()=>{this.buyObject(new Item (this, 900, 500, 'alleyIco', "collectable", 0)); this.renderInventory()});

        const showBotton = this.add.image(0,450,'BackButton').setOrigin(0, 0).setInteractive(); // Botón de vuelta.
        showBotton.on('pointerdown',()=>{this.hideInventory()});

    }

    backToMap(){
        this.scene.stop();
        this.scene.wake('japanLevelSelector', {character: this.professor, skin: this.skin, inventory: this.inventory, 
            globalAura: this.globalAura, locationNode: this.locationNode, levelsCompleted: this.levelsCompleted
        });
    }

    buyObject(obj){
    
        if (obj.type == "skin"){
            if (obj.price <= this.inventory.getMoney()){
                this.inventory.addObject(obj);
                this.inventory.removeMoney(obj.price);
            }
        }
        else if (obj.type == "mission"){
            if (obj.price <= this.inventory.getMoney()){
                this.inventory.addObject(obj);
                this.inventory.removeMoney(obj.price);
            }
        }
        else if (obj.type == "collectable"){
            if (obj.price <= this.inventory.getMoney()){
                this.inventory.addObject(obj);
                this.inventory.removeMoney(obj.price);
            }
        }

        console.log(this.inventory);

    }

    talkToWorker(){

        this.scene.start('dialogScene', {

            levelsCompleted: this.levelsCompleted,
            character: this.professor,
            skin: this.skin,
            inventory: this.inventory,
            globalAura: this.globalAura,
            initialNode: this.initialNode, text: "",
            background: this.locationBackground,
            startingDialog: this.startingDialog

        });
        
    }

    renderInventory(){

        this.inventory.showInventory();

    }

    hideInventory(){

        this.inventory.hideInventory();

    }

}
