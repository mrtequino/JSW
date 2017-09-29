<template>
    <div id="arbol">
        <button v-on:click="infoMethod()">Cargar Información</button>
        <p>{{infoString}}</p>
        <ul id="demo">
            <rama class="item" :model="dataMia"></rama>
        </ul>
    </div>
</template>

<script>
import Rama from './Rama'
export default {
    name: "arbol",
    components: {
        Rama
    },
    data: function() {
        return {
            info: [
                { "nombre": "dpeniafiel", "apellido": "Peñafiel", "perfiles": [{ "perfil": "programador", "empresas": [{ "nombre": "Tablita" }] }, { "perfil": "analista" }] },
                { "nombre": "cjimenez", "apellido": "Jimenez", "perfiles": [{ "perfil": "infraestructura" }] }
            ],
            infoString: "",
            dataMia: {
                "id": "1", "padre": "", "nombre": "LTG", "estado": "A", children: [
                    {
                        "id": "1.1", "padre": "1", "nombre": "Programador", "estado": "A", children: [
                            {
                                "id": "1.1.1", "padre": "1.1", "nombre": "dpeniafiel", "estado": "A", children: [
                                    { "id": "1.1.1.1", "padre": "1.1.1", "nombre": "Diego Peñafiel", "estado": "A" },
                                    { "id": "1.1.1.2", "padre": "1.1.1", "nombre": "Tequino", "estado": "A" }
                                ]
                            }
                        ]
                    }
                ]
            },
            data: {
                name: 'My Tree',
                children: [
                    { name: 'hello' },
                    { name: 'wat' },
                    {
                        name: 'child folder',
                        children: [
                            {
                                name: 'child folder',
                                children: [
                                    { name: 'hello' },
                                    { name: 'wat' }
                                ]
                            },
                            { name: 'hello' },
                            { name: 'wat' },
                            {
                                name: 'child folder',
                                children: [
                                    { name: 'hello' },
                                    { name: 'wat' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        infoMethod: function() {
            this.infoMethodRecursivo(this.info);
        },
        infoMethodRecursivo: function(obj) {
            for (let valFila in obj) {
                let valObject = obj[valFila];
                for (let valColumna in valObject) {
                    //console.log(valColumna + ": " + valObject[valColumna]);
                    //console.log(typeof (valObject[valColumna]));
                    if (typeof (valObject[valColumna]) === "object") {
                        //console.log("Array: " + valObject[valColumna]);
                        this.infoString = this.infoString + valColumna + ": " //+ valObject[valColumna] + ";";
                        this.infoMethodRecursivo(valObject[valColumna]);
                    } else {
                        this.infoString = this.infoString + valColumna + ": " + valObject[valColumna] + ";";
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>
