export const dialogs = {

    //Dialogos shibuya
    shibuyaDial02: {
        choice: false,
        currentOption: false,
        name: "Shibuyense",
        text: ["soy de albacete jajaja", "pero no lo se bien,Albacete es bonito, si o si", "ayuda"],
        nextNode: "shibuyaDial03",
        action: () => { }
    },

    shibuyaDial01: {
        choice: false,
        currentOption: false,
        name: "Shibuyense",
        text: ["Hola", "Que tal, do a deer a female deer, re a ray of golden suuuun, me a name i call myself", "Me pica el ojo"],
        nextNode: "shibuyaDial02",
        action: () => { }
    },


    shibuyaDial03: {
        choice: true,
        currentOption: false,
        name: "Shibuyense",
        text: ["Hola", "Entendise todo?", "SI(a) o No(b)"],
        nextNode: "shibuyaDial01",
        action: () => {

            if (dialogs.shibuyaDial03.currentOption) {
                dialogs.shibuyaDial03.nextNode = null;
            }
            else {
                dialogs.shibuyaDial03.nextNode = "shibuyaDial01";
            }

        }
    },



}

//PLANTILLAS DE DIALOGO
// name:{
//        choice: bool,
//         currentOption:bool,
//        name: "String",
//        text: [string array],
//        nextNode01: dialog,
//         action: ()=>{function}
//    }

export const misionCondition = {
    misionTest: {
        //Nombre de las localizaciones que revisar para ver si se cumplen los niveles
        LocationsToCheck: ['Arcade', 'Crossing', 'Allay', 'SevenSixSeven'],
        //Niveles de las localizaciones y el valor que deben tener
        LocationLevel: [[false, false], [false], [false], [false, false]]

    }
}

export const levels = {
    
    crossing01: {
        levelZone:'Arcade',
        levelNumber:0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['u','','d.','','','d.','','','',''], 
        music: "arcadeSong",
        aura: 10,
        health: 10,
        background:'battleBackgrArcade'
    },

    arcade02: {
        levelZone:'Arcade',
        levelNumber:1,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['u','','d.','','','d.','','','',''], 
        music: "arcadeSong",
        aura: 10,
        health: 10,
        background:'battleBackgrArcade'
    },
    
    crossing01: {
        levelZone:'Crossing',
        levelNumber:0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['u','','d.','','','d.','','','',''], 
        music: "crossingSong",
        aura: 10,
        health: 10,
        background:'battleBackgrCrossing'
    },
    
    alley01: {
        levelZone:'Alley',
        levelNumber:0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['u','','d.','','','d.','','','',''], 
        music: "alleySong",
        aura: 10,
        health: 10,
        background:'battleBackgrAlley'
    },
    
    sixseven01: {
        levelZone:'SevenSixSeven',
        levelNumber:0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['u','','d.','','','d.','','','',''], 
        music: "sevensixseven1Song",
        aura: 10,
        health: 10,
        background:'battleBackgrSixSeven'
    },
    
    sixseven02: {
        levelZone:'SevenSixseven',
        levelNumber:1,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['u','','d.','','','d.','','','',''], 
        music: "sevensixseven2Song",
        aura: 10,
        health: 10,
        background:'battleBackgrSixSeven'
    }

}
