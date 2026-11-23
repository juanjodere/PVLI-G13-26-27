export const dialogs = {

    //Dialogos shibuya
       shibuyaDial02: {
        choice: false,
        currentOption: false,
        name: "Shibuyense",
        text: ["soy de murcia jajaja", "pero no lo se bien", "ayuda"],
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