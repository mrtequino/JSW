import axios from 'axios';

import config from '../config'

class SeguridadService {

    login(usuario, clave) {
        return axios.post(config.urlBase + 'login', {
            username: usuario,
            password: clave
        }).then(response => response).catch(error => error)
    };

    usuarioFindAll() {
        return axios.get(config.urlBase + config.urlUsuarioFindAll);
    };

    usuarioCreate(usuario) {
        return axios.post(config.urlBase + config.urlUsuarioCreate, usuario);
    };

    usuarioDelete(usuario) {
        return axios.post(config.urlBase + config.urlUsuarioDelete, usuario);
    };

    rolFindAll() {
        return axios.get(config.urlBase + config.urlRolFindAll).then(res => res.data).catch(err => err);
    };
}

export default new SeguridadService();