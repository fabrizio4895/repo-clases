import express from 'express';
import bodyParser from 'body-parser';
import docenteRoutes from './routes/docente.js'

var app = express(); //app representa al aplicativo
app.use(bodyParser.json())

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

app.listen(3001, () => { //Puerto 3001, porque no pueden haber 2 aplicaciones corriendo en el mismo puerto
    console.log('Servidor iniciado.')
})

