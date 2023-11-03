import repository from "../repository/matricula.js";

const findAll = (req,res) => {
    const curso = repository.findAll(); //Esto trae el repositorio del arreglo
    return res.status(200).json(curso); //status(200) indica que la solicitud ha tenido éxito
}

//Para crear un nuevo alumno en el repositorio
const create = (req,res) => {
    const result = repository.create(req.body); //Va a requerir un body en los tests
    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id; //Asi se obtiene el id de la URL
    const result = repository.findOne(id);

    if(result) //Si encuentra resultado
        return res.status(200).json(result)
    else //status 500 es un error, es cuando no encuentra el id del docente
        return res.status(500).json({message:'Alumno no encontrado.'})
}

const update = (req,res) => {
    const result = repository.update(req.body); //Va a requerir un body en los tests
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Alumno no encontrado.'})
}

const remove = (req,res) => {
    const id = req.params.codigo; //Asi se obtiene el id de la URL
    const result = repository.remove(id)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Alumno no encontrado.'})
}

const alumnoController = { findAll, create, findOne, update, remove }

export default alumnoController;