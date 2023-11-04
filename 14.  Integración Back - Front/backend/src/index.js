import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import docenteRoutes from './routes/docente.js'
import alumnoRoutes from './routes/alumno.js'
import cursoRoutes from './routes/curso.js'
import carreraRoutes from './routes/carrera.js'
import matriculaRoutes from './routes/matricula.js'

var app = express(); //app representa al aplicativo
app.use(bodyParser.json())

app.use(cors()) //Con esto, el api acepta solicitudes de cualquier ruta, del 3000 en este caso

app.get('/',(req, res) => {
    return res.json({result: 'OK'})
})

//Primera versión de ruta docente
/*
app.get('/docente', (req, res) => { //Se crea la ruta docente, cuando se busque http://localhost:3001/docente saldrá {result:'docentes'}
    return res.json({result:'docentes'})
})
*/

app.use("/docente",docenteRoutes); //Para la ruta de /docente, utilizar las rutas aplicadas en docenteRoutes
app.use("/alumno",alumnoRoutes); //Paralaruta/alumno se utilizará las rutas aplicadas en alumnoRoutes
app.use("/curso",cursoRoutes);
app.use("/carrera",carreraRoutes);
app.use("/matricula",matriculaRoutes);

app.listen(3001, () => { //Puerto 3001, porque no pueden haber 2 aplicaciones corriendo en el mismo puerto
    console.log('Servidor iniciado. Escuchando en puerto 3001')
})

