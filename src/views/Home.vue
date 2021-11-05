<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
</script>
<template>
  <div class="home">
      <div class="columns is-multiline is-mobile is-centered">
        <router-link to="/pagar"> Pagar </router-link>
        <router-link to="/receber"> Receber </router-link>
        <router-link to="/pagar_parcelado"> Pagar Parcelado </router-link>
        <router-link to="/receber_parcelado"> Receber Parcelado </router-link>
    </div>
    <h1>HOME</h1>

  </div>
</template>
