import alumnoRepository from "../repository/alumno.js";

const findAll = (req,res) => {
    const alumnos = alumnoRepository.findAll(); //Esto trae el repositorio del arreglo
    return res.status(200).json(alumnos); //status(200) indica que la solicitud ha tenido éxito
}

//Para crear un nuevo alumno en el repositorio
const create = (req,res) => {
    const result = alumnoRepository.create(req.body); //Va a requerirun body en los tests
    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const codigo = req.params.codigo; //Asi se obtiene el codigo de la URL
    const result = alumnoRepository.findOne(codigo);

    if(result) //Si encuentra resultado
        return res.status(200).json(result)
    else //status 500 es un error, es cuando no encuentra el codigo del docente
        return res.status(500).json({message:'Alumno no encontrado.'})
}

const update = (req,res) => {
    const result = alumnoRepository.update(req.body);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Alumno no encontrado.'})
}

const remove = (req,res) => {
    const codigo = req.params.codigo; //Asi se obtiene el codigo de la URL
    const result = alumnoRepository.remove(codigo)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Alumno no encontrado.'})
}

const alumnoController = { findAll, create, findOne, update, remove }

export default alumnoController;