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




