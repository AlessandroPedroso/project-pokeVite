<script setup>
import { ref } from 'vue';


let count = ref(0)
</script>

<template>
    <!-- NAVBAR -->
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
      <router-link class="navbar-brand" to='/'>
      <img src="./assets/icon.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      PoKerVite
    </router-link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{name:'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'about'}">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- CONTENT -->
<div class="main">
  <router-view></router-view>
</div>

<!-- FOOTER -->
<footer class="bg-primary text-light">
<div>Desenvolvido por Alessandro Pedroso - {{ new Date().getFullYear() }}</div>
</footer>

</template>

<style scoped>
 footer{
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
 }
</style>
