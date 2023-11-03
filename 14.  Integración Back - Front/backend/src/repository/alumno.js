let alumnos = [
    {
        id: 20185467,
        nombre: "Saul",
        apellido:"Goodman",
        carrera:"Ingenería de Sistemas"
    },{
        id: 20193489,
        nombre: "María",
        apellido:"Campos",
        carrera:"Arquitectura"
    }
]

const findAll  = () => {
    return alumnos;
}

//Crear alumno
const create = (alumno) => {
    alumnos.push(alumno)
    return alumno;
}

//Encontrar un alumno por el id
const findOne = (id) => {
    const result = alumnos.find(x => x.id == id);
    return result;
}

//Para actualizar datos de un alumno
const update = (alumno) => {
    //findIndex devuelve el indice de donde se encuentra el alumno que estamos buscando
    const index = alumnos.findIndex(item => item.id === alumno.id);

    //Si encuentra un alumno, ese alumno encontrado pasa a ser el alumno que se actualizara sus datos
    if (index > -1){
        alumnos[index] = alumno;
        return alumno;
    }else{
        return null;
    }
}

const remove = (id) => {
    const index = alumnos.findIndex(item => item.id == id);

    if (index > -1){
        alumnos.splice(index,1); //splice elimina los siguientes elementos del arreglo, en este caso, el 1 que es el índice
        return true;
    }else{
        return false;
    }
}

const alumnoRepository = { findAll, create, findOne, update, remove }

export default alumnoRepository;