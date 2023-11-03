let docentes = [
    {
        id: 1,
        nombre: "Juan",
        apellido:"Perez",
        curso:"Programación Web"
    },{
        id: 2,
        nombre: "Sandra",
        apellido:"Sanchez",
        curso:"Derecho Penal"
    }
]

const findAll = () => {
    return docentes;
}

//Crear docente
const create = (docente) => {
    docentes.push(docente)
    return docente;
}

//Encontrar un docente por el id
const findOne = (id) => {
    const result = docentes.find(x => x.id == id);
    return result;
}

//Para actualizar datos de un docente
const update = (docente) => {
    //findIndex devuelve el indice de donde se encuentra el docente que estamos buscando
    const index = docentes.findIndex(item => item.id === docente.id);

    //Si encuentra un docente, ese docente encontrado pasa a ser el docente que se actualizara sus datos
    if (index > -1){
        docentes[index] = docente;
        return docente;
    }else{
        return null;
    }
}

const remove = (id) => {
    //findIndex devuelve el indice de donde se encuentra el docente que estamos buscando
    const index = docentes.findIndex(item => item.id == id);

    if (index > -1){
        docentes.splice(index,1); //splice elimina los siguientes elementos del arreglo, en este caso, el 1 que es el índice
        return true;
    }else{
        return false;
    }
}

const docenteRepository = { findAll, create, findOne, update, remove }

export default docenteRepository;