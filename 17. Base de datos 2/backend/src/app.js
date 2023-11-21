import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import carreraRoutes from './routes/carrera.js'
import alumnoRoutes from './routes/alumno.js'
import cursoRoutes from './routes/curso.js'
import docenteRoutes from './routes/docente.js'

//App contiene todo lo que tiene que ver con la configuración del API
var app = express();
app.use(bodyParser.json())
app.use(cors()) //Con esto, el api acepta solicitudes de cualquier ruta, del 3001 en este caso

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/carrera", carreraRoutes)
app.use("/alumno", alumnoRoutes)
app.use("/docente", docenteRoutes)
app.use("/curso", docenteRoutes)

export default app;