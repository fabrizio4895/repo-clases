import express from 'express'

import docenteController from '../controllers/docente.js'

const routes = express.Router() //express.Router permite definir las rutas

//Primera versión, entrega solo { result:'docentes' }
/*
routes.get('/', (req,res) => {
    return res.json({ result:'docentes' }) //localhost:3001/docente
})
*/

routes.get('/', docenteController.findAll)

//Para generar un nuevo docente es POST
routes.post('/', docenteController.create)

//Para obtener información específica, en este caso, de un docente
routes.get('/:id',docenteController.findOne)

//Para actualizar datos de un docente
routes.put('/', docenteController.update)

//PAra eliminar un docente
routes.delete('/:id', docenteController.remove)

export default routes;