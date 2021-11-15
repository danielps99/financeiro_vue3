<template>
  <div class="box">
      <div class="columns is-multiline is-mobile">
        <router-link class="button is-rounded px-2 mx-2" to="/"> Início </router-link>
        <router-link class="button is-rounded px-2 mx-2" to="/about"> Sobre </router-link>
        <router-link class="button is-rounded px-2 mx-2" to="/receber">Configuração</router-link>
      </div>
    </div>
  <router-view/>
</template>