<script setup>
import {onMounted} from "vue";
import productDB from "../database/products";

onMounted(async () => {
  console.log('JEG ER LIGE STARTET');

  const allProducts = await productDB.getAllProducts('gris');
  console.log(allProducts);
});
</script>

<template>
  <h1>SHOP VIEW</h1>

</template>

<style scoped>

</style>