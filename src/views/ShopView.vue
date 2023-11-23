<script setup>
import {onMounted, ref} from "vue";
import productDB from "../database/products";

let products = ref([]);

onMounted(async () => {
  products.value = await productDB.getAllProducts();
});

</script>

<template>
  <h1>SHOP VIEW</h1>
  <div>
    <div>
      <ul>
        <li v-for="product in products">
          {{product.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>