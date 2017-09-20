<template>
  <div id="app" class="container">
    <h4>Módulo de Administración de Seguridades</h4>
    <nav class='navbar navbar-default' v-if="hasSession()==true">
      <div class='container'>
        <ul class='nav navbar-nav'>
          <li>
            <router-link :to="{ path: 'usuario' }" v-if="hasRole('ROLE_1')==true">Usuario</router-link>
          </li>
          <li>
            <router-link :to="{ path: 'rol' }" v-if="hasRole('ROLE_2')==true">Rol</router-link>
          </li>
          <li>
            <a href="#" v-if="isLogeado()==true" @click="logout($event)">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="panel panel-default">
      <div class="panel-body">
        <router-view></router-view>
      </div>
    </div>
    <img id="mc-app-img-logo" src="./assets/logo.png">

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#mc-app-img-logo {
  width: 50px;
  height: 50px;
}

a {
  color: black!important;
  font-size: 14px;
  font-weight: bold;
}

h4 {
  color: orange;
}
</style>
