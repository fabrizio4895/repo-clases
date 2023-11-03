import express from 'express'

import alumnoController from '../controllers/alumno.js'

const routes = express.Router() //express.Router permite definir las rutas

routes.get('/', alumnoController.findAll)

//Para generar un nuevo alumno es POST
routes.post('/', alumnoController.create)

//Para obtener información específica, en este caso, de un alumno
routes.get('/:codigo',alumnoController.findOne)

//Para actualizar datos de un alumno
routes.put('/', alumnoController.update)

//PAra eliminar un alumno
routes.delete('/:codigo', alumnoController.remove)

export default routes;