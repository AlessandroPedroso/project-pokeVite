<script setup>
const pokemon = defineProps(["name","urlBaseSvg"])
</script>

<template>
    <div class="col-4">
        <div class="card p-2 mb-3 cardListPokemon">
            <p class="text-center">{{ pokemon.name }}</p>
            <img  :src="urlBaseSvg" class="card-img-top" alt="..." height="80" />
        </div>
    </div>
</template>

<style scoped>
.cardListPokemon{
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(71,241,159,0.7875525210084033) 100%, rgba(252,70,107,1) 100%);
    cursor: pointer;
}

.cardListPokemon:hover{
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,0.6) 0%, rgba(71,241,159,0.4) 100%, rgba(252,70,107,0.4) 100%);
    
}

.cardListPokemon img:hover{

    padding: .1rem;
}
</style>