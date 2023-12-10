<script setup>

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { ref } from "vue";
import {useCart} from "@/components/ShopComponents/CartComposable";

const isAdmin = ref(false);
const {totalCartAmount, addItemToCart} = useCart();

const setIsAdmin = (newAdminState) => {
  isAdmin.value = newAdminState;
}

</script>

<template>
  <TheHeader :isAdmin="isAdmin" :setIsAdmin="setIsAdmin" :totalCartAmount="totalCartAmount"/>

  <main>
    <RouterView :isAdmin="isAdmin" :setIsAdmin="setIsAdmin" :addToCart="addItemToCart"/>
  </main>

  <TheFooter />
</template>

<style scoped>
</style>

