import modelo from '../model/carrera.js' //Esto exporta un modelo que está amarrado con sequelize

let arr = [];

const findAll  = async() => {
    try{
        const result = await modelo.findAll();
        console.debug(result);
    }catch(err){
        console.error(err);
        return null;
    }
}

const create = async(object) => {
    try{
        return await modelo.create(object)
    }catch(err){
        console.error(err);
        return null;
    }
    arr.push(object)
    return object;
}

const findOne = (id) => {
    const result = arr.find(x => x.id == id);
    return result;
}

const update = (object) => {
    const index = arr.findIndex(item => item.id === object.id);

    if (index > -1){
        arr[index] = object;
        return object;
    }else{
        return null;
    }
}

const remove = (id) => {
    const index = arr.findIndex(item => item.id == id);

    if (index > -1){
        arr.splice(index,1); //splice elimina los siguientes elementos del arreglo, en este caso, el 1 que es el índice
        return true;
    }else{
        return false;
    }
}

const repository = { findAll, create, findOne, update, remove }

export default repository;