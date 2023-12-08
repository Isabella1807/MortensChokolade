<script setup>

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { ref } from "vue";

const isAdmin = ref(true);

const setIsAdmin = (newAdminState) => {
  isAdmin.value = newAdminState;
}
</script>

<template>
  <TheHeader :isAdmin="isAdmin" :setIsAdmin="setIsAdmin" />

  <main>
    <RouterView :isAdmin="isAdmin" :setIsAdmin="setIsAdmin" />
  </main>

  <TheFooter />
</template>

<style scoped>
</style>

