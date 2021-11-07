import { defineStore } from 'pinia';
import Titulo from "@/models/Titulo";
import createHttp from "@/stores/axiosConfig";
import ResponseQuery from "@/models/responses/ResponseQuery";

const http = createHttp();

export const movimentoStore = defineStore("movimento", {
  state: () => ({
    titulos: [] as Titulo[],
    titulosPageNumber: 0
  }),
  getters: {
    getTitulosTotal: state => {
      return state.titulos.length;
    }
  },
  actions: {
    // async reset() { poderia ser assincrono
    carregarTitulos() {
      this.titulosPageNumber++;
      const urlPost = `/query/TitulosAgendadosDescricaoValorVencimentoOperacao/${this.titulosPageNumber}`;
      http.post(urlPost, {}).then((res: ResponseQuery<Titulo>) => {
        const maisTitulos: Titulo[] = res.data.data;
        maisTitulos.map(t => {
          this.titulos.push(t);
        });
      });
    }
  }
})