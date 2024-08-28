<script setup>
const pokemon = defineProps(['name', 'xp', 'height','img'])

</script>

<template>
    <div class="card cardPokemonSelected">
        <img height="250" :src="pokemon.img" class="card-img-top p-2" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">{{ pokemon.name }}</h5>
            <hr>
            <div class="row">
                <section class="col">
                    <strong>XP: </strong>
                    <span>{{ pokemon.xp }}</span>
                </section>

                <section class="col">
                    <strong>Altura: </strong>
                    <span>{{ pokemon.height }}</span>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cardPokemonSelected{
    height: 350px;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgb(228, 129, 90) 0%, rgba(71,241,159,0.7875525210084033) 100%, rgba(252,70,107,1) 100%);
}
</style>