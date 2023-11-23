<script setup>
import {onMounted} from 'vue';
import {isaTestAddDoc} from "../database/MyTest";
import productDB from "../database/products";

onMounted(async () => {
  console.log('JEG ER LIGE STARTET');
  //extraImages HAVE to be an array, price HAVE to be a number, and dont skip any parameters
  /*productDB.addNewProduct(
      "fff",
      "g.png",
      ["hejs.png", "ghgh.png"],
      "jjj",
      3,
      "kategori"
  );*/
  const allProducts = await productDB.getAllProducts('gris');
  console.log(allProducts);
});

</script>

<template>

</template>

<style scoped>

</style>