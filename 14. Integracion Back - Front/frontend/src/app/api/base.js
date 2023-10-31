import axios from 'axios'

//URI hace referencia a la url base
const URI = 'http://localhost:3001'

//El endpoint tiene como modelo así "/matricula"
const get = async (endpoint) => { //async devuelve un objeto
    try { //Se usa try catch, porque la llamada puede fallar
        const url = URI.concat(endpoint); //Se concatena la url con el endpoint

        return await axios.get(url);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const post = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.post(url, payload);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const put = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.put(url, payload);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const remove = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.delete(url);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const base = { get, post, put, remove };

export default base;