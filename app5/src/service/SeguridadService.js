import axios from 'axios';

import config from '../config'

class SeguridadService {
    login(usuario, clave) {
        return axios.post(config.urlBase + 'login', {
            username: usuario,
            password: clave
        }).then(response => response).catch(error => error)
    };

    getUsuarios() {
        return axios.get(config.urlBase + 'seguridad/usuario/findAll').then(res => res.data).catch(err => err);
    };

    getRoles() {
        return axios.get(config.urlBase + 'seguridad/rol/findAll').then(res => res.data).catch(err => err);
    };
}

export default new SeguridadService();