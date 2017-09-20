<template>
  <div class="mc-app-usuario">
    <input type="button" value="Obtener Usuarios" v-on:click="getUsuarios()" />
    <ul>
      <li v-for="usu in usuarios">
        {{usu.usuaCodigo}}
      </li>
    </ul>
  </div>
</template>

<script>
import SeguridadService from '@/service/SeguridadService'
export default {
  name: 'mc-app-usuario',
  data() {
    return {
      usuarios: {}
    }
  },
  methods: {
    getUsuarios: function() {
      SeguridadService.getUsuarios().then(res => { return this.usuarios = res; }).catch(err => alert(err));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
