<script setup lang="ts">
import createHttp from "@/stores/axiosConfig";
import ResponseData from "@/models/responses/ResponseData";
import ResponsePage from "@/models/responses/ResponseQuery";
import Titulo from "@/models/Titulo";
import Conta from "@/models/Conta";
import { ref } from "vue";

const http = createHttp();
const titulos = ref<Titulo[]>([]);
const contas = ref<Conta[]>([]);

const urlPost = `/query/TitulosAgendadosDescricaoValorVencimentoOperacao/${1}`;
http.post(urlPost, {}).then((res: ResponsePage<Titulo>) => {
  titulos.value = res.data.data;
});

http.get("/conta").then((res: ResponseData<Conta>) => {
  contas.value = res.data;
});

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
    <ul>
      <li v-for="c in titulos" :key="c.id">
        {{ c.descricao }} {{ c.valor }}
      </li>
    </ul>

    <h3>Contas {{contas.length}}</h3>
    <ul>
      <li v-for="c in contas" :key="c.id">
        {{ c.descricao }} {{ c.saldoAtual }}
      </li>
    </ul>
  </div>
</template>