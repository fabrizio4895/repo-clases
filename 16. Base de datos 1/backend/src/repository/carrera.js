<<<<<<< HEAD
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
=======
let arr = [
    {
        id: 1,
        nombre: "Ingeniería de Sistemas"
    },{
        id: 2,
        nombre: "Derecho"
    }
]

const findAll  = () => {
    return arr;
}

//Crear curso
const create = (object) => {
>>>>>>> dc1b4b983662da9a00b270b41cb54d65ab11e65f
    arr.push(object)
    return object;
}

<<<<<<< HEAD
=======
//Encontrar un curso por el id
>>>>>>> dc1b4b983662da9a00b270b41cb54d65ab11e65f
const findOne = (id) => {
    const result = arr.find(x => x.id == id);
    return result;
}

<<<<<<< HEAD
const update = (object) => {
    const index = arr.findIndex(item => item.id === object.id);

=======
//Para actualizar datos de un curso
const update = (object) => {
    //findIndex devuelve el indice de donde se encuentra el curso que estamos buscando
    const index = arr.findIndex(item => item.id === object.id);

    //Si encuentra un curso, ese curso encontrado pasa a ser el curso que se actualizara sus datos
>>>>>>> dc1b4b983662da9a00b270b41cb54d65ab11e65f
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