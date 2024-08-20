<script setup>
import { onMounted,reactive,ref } from 'vue';
import { api } from '../services/api.js'
import ListPokemon from '../components/ListPokemon.vue'

let urlBaseSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/")
let pokemons = reactive(ref());

async function getListPokemon() {
    return await api.get('/pokemon?limit=151&offset=0')
}

onMounted(() => {
    Promise.all([getListPokemon()])
        .then(([listaPokemon])=> {
            pokemons.value = listaPokemon.data.results
    })
})

</script>

<template>
    <main>
        <div class="container">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6">
                    <!-- <div class="card" style="width: 18rem;">
                        <img style="height: 200px; width: 200px;" src="https://www.ensino.eu/media/3kyh4vko/pokemon.jpg?width=300&height=300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                        </div>
                    </div> -->
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body row">

                            <ListPokemon v-for="(pokemon,index) in pokemons" :urlBaseSvg="urlBaseSvg + pokemon.url.split('/').at(6) + '.svg'" :key="index" :name="pokemon.name"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>