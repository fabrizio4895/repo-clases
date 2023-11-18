import base from './base.js'

const endpoint = '/alumno';
//Devuelve la url carrera
const findAll = async () => await base.get(endpoint);

const api = {findAll} //Así api tiene la funcionalidad de get

export default api;