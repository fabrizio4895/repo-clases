import repository from "../repository/carrera.js";

<<<<<<< HEAD
const findAll = async (req,res) => {
    const carrera = await repository.findAll(); //Esto trae el repositorio del arreglo
=======
const findAll = (req,res) => {
    const carrera = repository.findAll(); //Esto trae el repositorio del arreglo
>>>>>>> dc1b4b983662da9a00b270b41cb54d65ab11e65f
    return res.status(200).json(carrera); //status(200) indica que la solicitud ha tenido éxito
}

//Para crear un nuevo alumno en el repositorio
<<<<<<< HEAD
const create = async (req,res) => {
    const result = await repository.create(req.body); //Va a requerir un body en los tests
=======
const create = (req,res) => {
    const result = repository.create(req.body); //Va a requerir un body en los tests
>>>>>>> dc1b4b983662da9a00b270b41cb54d65ab11e65f
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
    const id = req.params.id; //Asi se obtiene el id de la URL
    const result = repository.remove(id)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:'Alumno no encontrado.'})
}

const alumnoController = { findAll, create, findOne, update, remove }

export default alumnoController;