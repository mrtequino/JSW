<template>
  <div class="mc-app-usuario">

    <ul>
      <li v-for="usu in usuarios">
        <input type="button" value="X" @click="onEliminar(usu)" /> {{usu.usuaUsuario}} - {{usu.usuaEstado}}
      </li>
    </ul>
    <div>
      <div class="form-group">
        <label for="app-usuario-codigo-1">Código:</label>
        <input id="app-usuario-codigo-1" class="form-control" type="text" placeholder="ingrese el código de usuario" v-model="usuario.usuaCodigo" />
      </div>
      <div class="form-group">
        <label for="app-usuario-usuario-1">Usuario:</label>
        <input id="app-usuario-usuario-1" class="form-control" type="text" placeholder="ingrese el nombre de usuario" v-model="usuario.usuaUsuario" />
      </div>
      <div class="form-group">
        <label for="app-usuario-clave-1">Clave:</label>
        <input id="app-usuario-clave-1" class="form-control" type="password" placeholder="ingrese la clave de usuario" v-model="usuario.usuaClave" />
      </div>
      <div class="form-group">
        <label for="app-usuario-estado-1">Estado:</label>
        <select id="app-usuario-estado-1" class="form-control" placeholder="Seleccione el estado" v-model="usuario.usuaEstado">
          <option value="ACTIVO">ACTIVO</option>
          <option value="INACTIVO">INACTIVO</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click="onCrear()">Crear Usuario</button>
    </div>
    <div class="log">
      {{log}}
    </div>
  </div>
</template>

<script>
import SeguridadService from '@/service/SeguridadService'

export default {
  name: 'mc-app-usuario',
  data() {
    return {
      usuario: {} = {
        usuaCodigo: null,
        usuaNombre: null,
        usuaClave: null,
        usuaEstado: null
      },
      usuarios: [],
      log: ""
    }
  },
  created() {
    this.onMostrar()
  },
  methods: {
    onMostrar: function() {
      SeguridadService.usuarioFindAll().then(res => { this.usuarios = res.data; this.log = "CORRECTO"; }).catch(err => this.log = JSON.stringify(err));
    },
    onCrear: function() {
      SeguridadService.usuarioCreate(this.usuario).then(res => { this.usuarios = res.data; this.log = "CORRECTO"; }).catch(err => this.log = JSON.stringify(err));
    },
    onEliminar: function(usuario) {
      SeguridadService.usuarioDelete(usuario).then(res => { this.usuarios = res.data; this.log = "CORRECTO"; }).catch(err => this.log = JSON.stringify(err));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log {
  color: red;
}
</style>
