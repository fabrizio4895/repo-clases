import express from 'express'

import controller from '../controllers/matricula.js'

const routes = express.Router() //express.Router permite definir las rutas


routes.get('/', controller.findAll)
routes.post('/', controller.create)
routes.get('/:id',controller.findOne)
routes.put('/', controller.update)
routes.delete('/:id', controller.remove)

export default routes;