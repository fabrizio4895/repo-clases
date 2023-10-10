'use client'


import { useEffect, useState } from 'react'

import styles from './alumnos.module.css'
import Formulario from './Formulario/Formulario.jsx'

const Alumnos = () => {

    const [showFormulario, setShowFormulario] = useState(false);
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        let alumnosInicial = JSON.parse(localStorage.getItem("alumnos"));
        setAlumnos(alumnosInicial) //Para setear los alumnosInicial en alumnos
    }, [])


    useEffect(() => {
        localStorage.setItem("alumnos",JSON.stringify(alumnos))
    },[alumnos])


    const handleShowFormulario = () => {
        setShowFormulario(!showFormulario); //Esto hace que cuando demos click, se muestre lo contrario que se tiene, por lo que lo muestra y escodna con cada click
    }

    const handleAgregar = (alumno) => { //Esta función recibe un objeto alumno
        setAlumnos([...alumnos, alumno]) //Se le agrega al arreglo alumnos el último alumno creado en Formulario
    } //handleAgregar te da la tabla previa y el nuevo alumno

    return (        
        <>
            <h1>Esta es la página oficial de alumnos</h1>
            
            <table className={styles.tabla}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Carrera</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map(item => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.carrera}</td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
            <br />
            <button onClick={handleShowFormulario}>AGREGAR</button>
            <br />
            <br />
            {
                showFormulario && <Formulario onEnviar ={handleAgregar}/> //Acá la función handleAgregar se convierte en onEnviar, destacar que al ser iguales, ahora onEnviar necesita recibir un objeto alumno en Formulario
            }
            
        </>
    )
}

export default Alumnos 