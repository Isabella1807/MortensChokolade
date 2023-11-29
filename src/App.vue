<script setup>
import TheHeader from "./components/HeaderComponents/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import {ref} from "vue";

const isAdmin = ref(false);

const setIsAdmin = (state) => {
isAdmin.value = state;
}
</script>

<template>

  <TheHeader/>

  <main>
    <RouterView :isAdmin="isAdmin" :setIsAdmin="setIsAdmin"/>
  </main>

  <TheFooter/>

</template>

<style scoped>

</style>
