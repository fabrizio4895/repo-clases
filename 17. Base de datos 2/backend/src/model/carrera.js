import { DataTypes } from 'sequelize'; //Sequelize nos otorga del datatype, con el cual podemos identificar el tipo de dato
import sequelize from '../config/database.js';

const Carrera = sequelize.define('carrera', { //Define el nombre de la tabla y dentro especificarle cada uno de sus campos
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, //Cuando intente registrar una nueva fila, se agregará solo con el nombre. Ejm, Juan es id: 1, si registró a Saúl, será id:2
        allowNull: false //Esto hace que ID no permita ser un valor nulo
    },
    nombre: {
        type: DataTypes.STRING
    }
})

export default Carrera;