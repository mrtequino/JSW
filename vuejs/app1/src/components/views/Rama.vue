<template>
    <li>
        <div>
            <button class="btn btn-danger" v-on:click="onSeleccionar(model)">X</button>
            {{model.id}} - {{model.nombre}}
        </div>
        <ul>
            <rama v-for="model in model.children" :model="model" v-bind:item="model" v-bind:key="model.id"></rama>
        </ul>
    </li>
</template>

<script>
export default {
    name: "rama",
    props: {
        model: Object
    },
    methods: {
        onSeleccionar: function(data) {
            try {
                if (typeof (this.$parent.model) === "undefined") {
                    throw ("Este nodo no puede ser eliminado");
                }
                let nodos = this.$parent.model.children;
                let indiceEliminar = nodos.findIndex(nodo => nodo.id == data.id);
                nodos.splice(indiceEliminar, 1);
                alert("Registro eliminado");
            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}

button {
    height: 15px;
    width: 20px;
    margin: -1px;
    padding: 0px;
    font-size: 11px;
    font-weight: bold;
}
</style>
