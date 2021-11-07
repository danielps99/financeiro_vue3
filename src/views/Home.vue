<script setup lang="ts">
import {storeToRefs} from "pinia"
import {movimentoStore} from "@/stores/movimento"
import {isBottomOfWindow} from '@/services/UtilWindowService'

const movStore = movimentoStore();
const {titulos, getTitulosTotal} = storeToRefs(movStore);
const {carregarTitulos} = movStore;
//OUTRA FORMA DE MAPEAR AS ACTIONS DA STORE
// import {mapActions} from "pinia"
// const {carregarTitulos} = mapActions(useCounterStore, ["carregarTitulos"]);

carregarDadosAoEntrarNaPagina();

window.onscroll = () => {
  if (isBottomOfWindow(window)) {
    carregarTitulos();
  }
}

function carregarDadosAoEntrarNaPagina(){
  if(getTitulosTotal.value === 0) {
    carregarTitulos();
    carregarTitulos();
    carregarTitulos();
  }
}
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
    <h3>Titulos {{ titulos.length }}</h3>
    <h3>getTitulosTotal() {{ getTitulosTotal }}</h3>
    <ul>
      <li v-for="c in titulos" :key="c.id">
        {{ c.descricao }} {{ c.valor }}
      </li>
    </ul>
  </div>
</template>