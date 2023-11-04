import axios from 'axios' //Permite llamadas API REST[ref] con retorno JSON

const URI = 'http://localhost:3001' //URL Base

const get = async (endpoint) => { //La función async devuelve un objeto
    //Como llamar a algo remoto tiene la opción de fallar, se utiliza un try catch
    //El endpoint es solo, como ejemplo, "/matricula, mientras que la url es todo"
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url); //await detiene la ejecución y no continúa
    } catch(err){
        console.error(err);
        return null;
    }
}

const post = async (endpoint, payload) => { //payload son los datos, es decir, el JSON
    try {
        const url = URI.concat(endpoint);
        return await axios.post(url, payload); 
    } catch(err){
        console.error(err);
        return null;
    }
}

const put = async (endpoint, payload) => { //payload son los datos, es decir, el JSON
    try {
        const url = URI.concat(endpoint);
        return await axios.put(url, payload); 
    } catch(err){
        console.error(err);
        return null;
    }
}

const remove = async (endpoint) => { 
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url);
    } catch(err){
        console.error(err);
        return null;
    }
}

const base = {get, post, put, remove}; 
export default base;