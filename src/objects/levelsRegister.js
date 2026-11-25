import { misionCondition } from "../Data/data.js";
export default class locationsRegister{

    constructor(){
        this.locationsArray = []; // Es un array de localizaciones, de las cuales las distinguiremos entre ellas accediendo
                                  // al nombre de cada una
    }

    addLocation(name, levels = []){ // Añade una nueva localización, que por defecto no tiene niveles.
        this.locationsArray.push( new location(name, levels));
    }

    insertLevelOnLocation(locName, state = false){ // Añade un nivel a una localización del array.
        let loc = this.locationsArray.find((elem) => elem == locName);
        if (loc != null) loc.insertLevel(state);
    }

    completeLevelOnLocation(locName, index){ // Marca un nivel ya existente de una localización ya existente como terminado.
        let loc = this.locationsArray.find((elem) => elem == locName);
        if (loc != null) loc.completeLevel(index);
    }

    uncompleteLevelOnLocation(locName, index){ // Marca un nivel ya existente de una localización ya existente como no terminado.
        let loc = this.locationsArray.find((elem) => elem == locName);
        if (loc != null) loc.uncompleteLevel(index);
    }

    returnIfLevelCompletedOnLocation(locName, index){ // Accede al estado de un nivel de una lozalización dada.
        let loc = this.locationsArray.find((elem) => elem == locName);
        if (loc != null) loc.returnIfLevelCompleted(index);
    }

    checkMisionCondition(mision)
    {
        let this_mision = misionCondition[mision];
        if(mision == null){console.warn("Mision no encontrada: "+ mision);}
        let valid = true;
        let i = 0;
        let j = 0;
        while(i<this_mision.LocationsToCheck.length && valid)
        {
            j = 0;
            while(j<this_mision.LocationLevel[i].length && valid)
            {

                valid = this.returnIfLevelCompletedOnLocation(this_mision.LocationsToCheck[i],j) == this_mision.LocationLevel[i][j];
                j++;
            }
            i++;
        }
        console.log(valid);
        return valid;


    }
}

class location{

    constructor(name, levels = []){ // Constructor de la localización, que contiene un nombre y un array de bools.
        this.name = name;
        this.levelsArray = levels; // Cada índice del array simboliza un nivel (el 0, el primer nivel, el 1 el segundo, ...)
    }

    insertLevel(completed = false) { // inserta un nuevo índice al array, que por defecto es un nivel sin terminar.
        if(typeof completed == "boolean") this.levelsArray.push(completed);
    }

    completeLevel(index){ // Marca un nivel ya existente como terminado.
        if ( index < this.levelsArray.length ) this.levelsArray[index] = true;
    }

    uncompleteLevel(index){ // Marca un nivel ya existente como no terminado.
        if ( index < this.levelsArray.length ) this.levelsArray[index] = false;
    }

    returnIfLevelCompleted(index){ // Accede al estado de un nivel.
        if ( index < this.levelsArray.length ) return this.levelsArray[index];
    }
}