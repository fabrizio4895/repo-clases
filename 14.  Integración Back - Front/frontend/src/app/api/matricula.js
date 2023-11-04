import base from './base.js'

const endpoint = '/matricula';
//Devuelve la url matricula
const findAll = async () => await base.get(endpoint);
const create = async (payload) => await base.post(endpoint, payload);

const api = {findAll, create} //Así api tiene la funcionalidad de get



export default api;