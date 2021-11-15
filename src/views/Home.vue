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
  }
}
</script>
<template>
  <div class="mx-2 my-2">
    <div class="columns is-multiline is-mobile is-centered mx-0">
      <router-link to="/pagar" class="button is-warning column is-6 mb-1"> Pagar </router-link>
      <router-link to="/receber" class="button is-success column is-6 mb-1"> Receber </router-link>
      <router-link to="/pagar_parcelado" class="button button is-warning column is-6"> Pagar Parcelado </router-link>
      <router-link to="/receber_parcelado" class="button is-success column is-6"> Receber Parcelado </router-link>
    </div>
    <h3 class="has-text-centered"><b>Títulos Agendados</b></h3>
    <div v-for="(titulo, index) in titulos" :key="titulo.id" :class="{ listrado: index % 2 == 0}">
      <h3 class="is-12">{{ titulo.descricao }}</h3>
      <div class="columns is-mobile" >
        <span class="column has-text-left">{{titulo.vencimento}}</span>
        <span class="column has-text-centered">{{titulo.operacao}}</span>
        <span class="column has-text-right">{{titulo.valor}}</span>
      </div>
    </div>
  </div>
</template>