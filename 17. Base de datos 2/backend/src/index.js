import app from './app.js'
import sequelize from './config/database.js'

//Aquí en index se levanta la aplicación en sí
async function main() {
    try  {

        const init = process.argv[2] //argv es un arreglo de los argumentos que le he enviado a node cuando le he llamado en package json

        if (init) //Si se le envió el comando pare que inicialize toda la BD 
            await sequelize.sync({force: true}) //sync se conecta a la BD con los datos que le he dado, busca la BD que se le especificó en database.js
                                                //El force obliga a que si sequelize no encuentra una tabla que se está especificando, la crea
        else
            await sequelize.sync({force: false})

        console.log('conexión exitosa!')

        app.listen(3001, () => {
            console.log('Servidor iniciado. Escuchando en puerto 3001')
        })

    } catch(err) {
        console.error(err)
    }
}

main();

