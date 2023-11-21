import express from 'express'

import controller from '../controllers/carrera.js'

const routes = express.Router() //express.Router permite definir las rutas

routes.get('/', controller.findAll)

//Para generar un nuevo curso es POST
routes.post('/', controller.create)

//Para obtener información específica, en este caso, de un curso
routes.get('/:id',controller.findOne)

//Para actualizar datos de un curso
routes.put('/', controller.update)

//PAra eliminar un curso
routes.delete('/:id', controller.remove)

export default routes;