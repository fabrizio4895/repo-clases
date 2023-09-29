function a(){
    var x = 1; //Funciona, pero a veces no es compatible
    let y = 2; //Declarar variables en general que sí se pueden cambiar
    const n = 0; //Declarar variables que no se pueden cambiar

    y = y + 3;
    console.log(y);
}

function cambiarImagen(){
    const imagen = document.getElementById("imagen").src;
    console.log(imagen)             
    if(imagen === 'http://127.0.0.1:5500/Ejercicio%204/01.jpg'){ 
        document.getElementById("imagen").src = 'http://127.0.0.1:5500/Ejercicio%204/02.jpg';
    }else{
        document.getElementById("imagen").src = 'http://127.0.0.1:5500/Ejercicio%204/01.jpg';
    }
}