<template>
    <div>
        <div class="form-group">
            <label for="mc-inicio-input-text-1">Usuario:</label>
            <input id="mc-inicio-input-text-1" class="form-control" type="text" v-model="usuario" placeholder="Ingrese su nombre de usuario" />
        </div>
        <div class="form-group">
            <label for="mc-inicio-input-password-1">Clave:</label>
            <input id="mc-inicio-input-password-1" class="form-control" type="password" v-model="clave" placeholder="Ingrese su clave" />
        </div>
        <input class="btn btn-primary" type="button" value="Ingresar" v-on:click="onIngresar()" />
        <arbol></arbol>
    </div>
</template>

<script>
import axios from 'axios'
import decode from 'jwt-decode'
import Arbol from './views/Arbol'

import SeguridadService from '../service/SeguridadService'

export default {
    name: "mc-app-login",
    components: {
        Arbol
    },
    created() {
    },
    data() {
        return {
            titulo: "",
            usuario: "",
            clave: "",
            jsonSource: [
                { "nombre": "dpeniafiel", "apellido": "Peñafiel" },
                { "nombre": "cjimenez", "apellido": "Jimenez" }
            ]
        }
    },
    methods: {
        onIngresar: function() {
            SeguridadService
                .login(this.usuario, this.clave)
                .then(response => {
                    if (response.status === 200 && 'authorization' in response.headers) {
                        this.$session.start();
                        this.$session.set('jwt', response.headers.authorization);
                        axios.defaults.headers.common['Authorization'] = response.headers.authorization;
                        this.$session.set('axios', axios);
                        this.$router.push('inicio');

                        //decodificar y colocar los roles desde jwt
                        let jwtActual = this.$session.get('jwt');
                        if (jwtActual) {
                            this.$session.set('roles', decode(jwtActual).roles);
                        }
                    } else {
                        alert(response);
                    }
                })
                .catch(error => alert(error));
        }
    }
}
</script>

<style>

</style>
