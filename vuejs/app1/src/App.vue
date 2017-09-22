<template>
  <div id="app" class="container">

    <div>
      <h4>
        <span>Módulo de Administración de Seguridades</span> <img id="mc-app-img-logo" src="./assets/logo.png"></h4>
    </div>
    
    <nav class='navbar navbar-default' v-if="hasSession()==true">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">Navegación</a>
      </div>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class='nav navbar-nav'>
            <li>
              <router-link :to="{ path: 'usuario' }" v-if="hasRole('ROLE_1')==true">Usuario</router-link>
            </li>
            <li>
              <router-link :to="{ path: 'rol' }" v-if="hasRole('ROLE_2')==true">Rol</router-link>
            </li>
            <li>
              <a class="mc-app-logout" href="#" v-if="isLogeado()==true" @click="logout($event)">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="panel panel-default">
      <div class="panel-body">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'mc-app',
  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push('/')
    } else {
      this.$router.push('/inicio')
      axios.defaults.headers.common['Authorization'] = this.$session.get("jwt");
    }
  },
  computed: {

  },
  methods: {
    isLogeado: function() {
      if (typeof this.$session.get('jwt') !== "undefined") {
        return true;
      } else {
        return false;
      }
    },
    hasRole: function(rol) {
      if (this.$session.exists()) {
        let roles = JSON.parse(this.$session.get('roles'));
        for (let r of roles) {
          if (r.rol == rol) {
            return true;
            break;
          }
        }
        return false;
      }
    },
    hasSession: function() {
      if (this.$session.exists()) {
        return true;
      }
      return false;
    },
    logout: function(event) {
      this.$session.destroy();
      axios.defaults.headers.common['Authorization'] = '';
      this.$router.push('/');
      event.preventDefault();
    }
  }
}
</script>

<style>
#mc-app-img-logo {
  width: 30px;
  height: 30px;
  float: right;
}

.mc-app-logout {
  color: red!important;
  cursor: pointer;
}

h4 {
  color: orange;
}
</style>
