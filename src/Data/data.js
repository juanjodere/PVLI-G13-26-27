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

        //Dialogo misiones shibuya

        shibuyaDial02mision: {
            choice: false,
            currentOption: false,
            name: "Shibuyense",
            text: ["Joputa"],
            nextNode: null,
            action: () => { }
        },
        shibuyaDial03mision: {
            choice: false,
            currentOption: false,
            name: "Shibuyense",
            text: ["Gracias"],
            nextNode: null,
            action: () => { }
        },
        shibuyaDial01mision: {
            choice: true,
            currentOption: false,
            name: "Shibuyense",
            text: ["Hola", "A que me das una manzana", "SI(a) o No(b)"],
            nextNode: "shibuyaDial02mision",
            action: () => {

                if (dialogs.shibuyaDial01mision.currentOption) {
                    dialogs.shibuyaDial01mision.nextNode = "shibuyaDial03mision";
                }
                else {
                    dialogs.shibuyaDial03.nextNode = "shibuyaDial02mision";
                }
            }

        }



    
}
export const misionCondition = {

    misionTest: {
        //Nombre de las localizaciones que revisar para ver si se cumplen los niveles
        LocationsToCheck: ['Arcade', 'Crossing', 'Allay', 'SevenSixSeven'],
        //Niveles de las localizaciones y el valor que deben tener
        LocationLevel: [[false, false], [false], [false], [false, true]]

    }
}
export const levels = {

    arcade01: {
        levelZone: 'Arcade',
        levelNumber: 0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['', 'u', '', 'd.', '', '', 'd.', '', '', '', ''],
        music: "arcade1Song",
        aura: 10,
        health: 10,
        background: 'battleBackgrArcade',
        bgScale: 1
    },

    arcade02: {
        levelZone: 'Arcade',
        levelNumber: 1,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['', 'u', '', 'd.', '', '', 'd.', '', '', '', ''],
        music: "arcade2Song",
        aura: 10,
        health: 10,
        background: 'battleBackgrArcade',
        bgScale: 0.2
    },

    crossing01: {
        levelZone: 'Crossing',
        levelNumber: 0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['', 'u', '', 'd.', '', '', 'd.', '', '', '', ''],
        music: "crossingSong",
        aura: 10,
        health: 10,
        background: 'battleBackgrCrossing',
        bgScale: 0.95
    },

    alley01: {
        levelZone: 'Alley',
        levelNumber: 0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['', 'u', '', 'd.', '', '', 'd.', '', '', '', ''],
        music: "alleySong",
        aura: 10,
        health: 10,
        background: 'battleBackgrAlley',
        bgScale: 1
    },

    sixseven01: {
        levelZone: 'SevenSixSeven',
        levelNumber: 0,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['', 'u', 'u', 'd.', '', '', 'd.', '', '', '', ''],
       
        music: "sevensixseven1Song",
        aura: 10,
        health: 10,
        background: 'battleBackgrSixSeven',
        bgScale: 0.2
    },

    sixseven02: {
        levelZone: 'SevenSixSeven',
        levelNumber: 1,
        judgeLineSprite: 'judgementLine',
        x: 100, y: 130,
        judgeLineSize: 67,

        movesArray: ['', 'u', '', 'd.', '', '', 'd.', '', '', '', ''],
         //TODO CAMBIAR CANCION
        music: "TestSong",
        aura: 10,
        health: 10,
        background: 'battleBackgrSixSeven',
        bgScale: 0.2
    }

}
