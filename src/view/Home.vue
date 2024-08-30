<script setup>
import { onMounted, reactive, ref,computed } from 'vue';
import { api } from '../services/api.js'
import ListPokemon from '../components/ListPokemon.vue'
import CartPokemonSelected from '../components/CartPokemonSelected.vue';

let urlBaseSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/")
let pokemons = reactive(ref());
let searchPokemonField = ref('');
let pokemonSelected = reactive(ref());
let loading = ref(false)

async function getListPokemon() {
    return await api.get('/pokemon?limit=151&offset=0')
}

onMounted(() => {
    Promise.all([getListPokemon()])
        .then(([listaPokemon]) => {
            pokemons.value = listaPokemon.data.results
        })
})

const pokemonsFiltered = computed(() => {
    if (pokemons.value && searchPokemonField.value) {
        return pokemons.value.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemonField.value.toLowerCase()))
    }

    return pokemons.value 
})

async function pokemonInformation(url) {
    const urlApi = url.match(/\/pokemon\/\d+\//)
    return await api.get(`${urlApi}`)
}

const selectPokemon = (pokemon) => {
    loading.value = true
    Promise.all([
        pokemonInformation(pokemon.url)

    ]).then(([pokemonData]) => {
        pokemonSelected.value = pokemonData.data
    }).catch(err => alert(err))
        .finally(() => {
        loading.value = false
    })
}

</script>

<template>

        <div class="container text-body-secondary">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6">
                    <CartPokemonSelected 
                    :name="pokemonSelected?.name" 
                    :xp="pokemonSelected?.base_experience"
                    :height="pokemonSelected?.height"
                    :img="pokemonSelected?.sprites?.other?.dream_world?.front_default"
                    :loading="loading"
                    />
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card cardList">
                        <div class="card-body row">
                            <div class="mb-3">
                                <label hidden for="searchPokemonField" class="form-label">Pesquisar...</label>
                                <input v-model="searchPokemonField" type="text" class="form-control" id="searchPokemonField"
                                    placeholder="Pesquisar...">
                            </div>
                            <ListPokemon v-for="(pokemon, index) in pokemonsFiltered"
                                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/').at(6) + '.svg'" :key="index"
                                :name="pokemon.name"
                                @click="selectPokemon(pokemon)"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
</template>


<style scoped>
.cardList{
    height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>