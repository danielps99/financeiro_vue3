import { defineStore } from 'pinia';
import Titulo from "@/models/Titulo";
import createHttp from "@/stores/axiosConfig";
import ResponseQuery from "@/models/responses/ResponseQuery";

const http = createHttp();

export const movimentoStore = defineStore("movimento", {
  state: () => ({
    titulos: [] as Titulo[]
  }),
  getters: {
    getTitulosTotal: state => {
      return state.titulos.length;
    }
  },
  actions: {
    // async reset() { poderia ser assincrono
    async carregarDados() {
      const urlPost = `/query/TitulosAgendadosDescricaoValorVencimentoOperacao/${1}`;
      http.post(urlPost, {}).then((res: ResponseQuery<Titulo>) => {
        this.titulos = res.data.data;
      });
    }
  }
})