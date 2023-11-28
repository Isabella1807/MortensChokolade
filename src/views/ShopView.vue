<script setup>
import ShopProduct from "@/components/ShopComponents/ShopProduct.vue";
import ShopCategorizer from "@/components/ShopComponents/ShopCategorizer.vue";
import {onMounted, ref} from "vue";
import productDB from "../database/products";

let products = ref([]);

onMounted(async () => {
  products.value = await productDB.getAllProducts();
});

</script>

<template>
  <div id="ProductCategoring">
    <ShopCategorizer :categories="uniqueCategories" />
  </div>

  <div id="ProductContainer">
    <ShopProduct v-for="product in products" :title="product.title" :frontImage="product.frontImage" :price="product.price"/>
  </div>
</template>

<style scoped>
#ProductContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>