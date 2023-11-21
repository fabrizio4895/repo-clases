import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import carreraRoutes from './routes/carrera.js'

var app = express(); //app representa al aplicativo
app.use(bodyParser.json())
app.use(cors()) //Con esto, el api acepta solicitudes de cualquier ruta, del 3000 en este caso

app.get('/',(req, res) => {
    return res.json({result: 'OK'})
})

app.use("/carrera",carreraRoutes);

export default app;