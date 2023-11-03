import docenteRepository from "../repository/docente.js";

const findAll = (req,res) => {
    const docentes = docenteRepository.findAll(); //Esto trae el repositorio del arreglo
    return res.status(200).json(docentes); //status(200) indica que la solicitud ha tenido éxito
}

//Para crear un nuevo docente en el repositorio
const create = (req,res) => {
    const result = docenteRepository.create(req.body);
    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id; //Asi se obtiene el id de la URL
    const result = docenteRepository.findOne(id);

    if(result) //Si encuentra resultado
        return res.status(200).json(result)
    else //status 500 es un error, es cuando no encuentra el id del docente
        return res.status(500).json({message:'Docente no encontrado.'})
}

const update = (req,res) => {
    const result = docenteRepository.update(req.body);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Docente no encontrado.'})
}

const remove = (req,res) => {
    const id = req.params.id; //Asi se obtiene el id de la URL
    const result = docenteRepository.remove(id)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Docente no encontrado.'})
}

const docenteController = { findAll, create, findOne, update, remove }

export default docenteController;