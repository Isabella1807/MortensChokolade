<script setup>
import {onMounted, ref} from "vue";
import productDB from "../../database/products";

let categories = ref([]);

onMounted(async () => {
  const allProducts = await productDB.getAllProducts();
  categories.value = getUniqueCategories(allProducts);
});

const getUniqueCategories = (products) => {
  const uniqueCategories = new Set();
  products.forEach((product) => {
    uniqueCategories.add(product.category);
  });
  return Array.from(uniqueCategories);
};

</script>

<template>
  <div id="ShopCategoringContainer">
    <h2 class="ShopCategoringItems">Alle produkter</h2>
    <div v-for="category in categories" :key="category">
      <h2 class="ShopCategoringItems">{{ category }}</h2>
    </div>
  </div>
</template>

<style scoped>
#ShopCategoringContainer{
  display: flex;
  justify-content: space-between;
}

.ShopCategoringItems{
}
</style>