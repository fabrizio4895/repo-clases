<<<<<<< HEAD
import app from './app.js'
import sequelize from './config/database.js'

async function main(){
    try{
        await sequelize.sync({force:true}) //sync se conecta a la BD con los datos que le he dado, busca la BD que se le especificó en database.js
        //El force obliga a que si sequelize no encuentra una tabla que se está especificando, la crea
        console.log('Conexión ha sido exitosa')

        app.listen(3001, () => { //Puerto 3001, porque no pueden haber 2 aplicaciones corriendo en el mismo puerto
            console.log('Servidor iniciado. Escuchando en puerto 3001')
        })
    }catch(err){
        console.error(err)
    }
}

main();



=======
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
>>>>>>> dc1b4b983662da9a00b270b41cb54d65ab11e65f

