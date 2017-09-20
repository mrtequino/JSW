import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Inicio from '@/components/Inicio'
import Usuario from '@/components/views/Usuario'
import Rol from '@/components/views/Rol'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario
    },
    {
      path: '/rol',
      name: 'Rol',
      component: Rol
    }
  ]
})
