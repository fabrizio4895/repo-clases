const fechaHoy = new Date()

let arr = [{
        id: 1,
        fechaMatricula: fechaHoy,
        alumno: {id:1},
        carrera: {id: 1},
        cursos: [
            {id:1},
            {id:2}
        ]
    }]

const findAll  = () => {
    return arr;
}

//Crear curso
const create = (object) => {
    arr.push(object)
    return object;
}

//Encontrar un curso por el id
const findOne = (id) => {
    const result = arr.find(x => x.id == id);
    return result;
}

//Para actualizar datos de un curso
const update = (object) => {
    //findIndex devuelve el indice de donde se encuentra el curso que estamos buscando
    const index = arr.findIndex(item => item.id === object.id);

    //Si encuentra un curso, ese curso encontrado pasa a ser el curso que se actualizara sus datos
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