<template>
    <div class="mc-app-rol">
        <input type="button" value="Obtener Roles" v-on:click="getRoles()" />
        <ul>
            <li v-for="rol in roles">
                {{rol.roleCodigo}}
            </li>
        </ul>
    </div>
</template>

<script>
import SeguridadService from '@/service/SeguridadService'
export default {
    name: 'mc-app-rol',
    data() {
        return {
            roles: {}
        }
    },
    methods: {
        getRoles: function() {
            SeguridadService.rolFindAll().then(res => { return this.roles = res; }).catch(err => alert(err));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
