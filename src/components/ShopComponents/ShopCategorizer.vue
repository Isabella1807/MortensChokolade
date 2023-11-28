<script setup>
import {onMounted, ref} from "vue";
import productDB from "../../database/products";

const props = defineProps(['setCategory', 'selectedCategory']);

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

// function sortItems(abc){
//   console.log(categories.value[0]);
//   console.log(abc);
// }
</script>

<template>
  <div id="ShopCategoringContainer">
    <div class="ShopCategoringItem" :class="{'active': props.selectedCategory === ''}">
      <h2 @click="() => props.setCategory('')">Alle produkter</h2>
    </div>
    <div class="ShopCategoringItem" :class="{'active': props.selectedCategory === category}"
         v-for="category in categories" :key="category"
         @click="() => props.setCategory(category)">
      <h2>{{ category }}</h2>
    </div>
  </div>
</template>

<style scoped>
#ShopCategoringContainer {
  display: flex;
  justify-content: space-between;
//border: 2px solid greenyellow; overflow-x: auto; color: #707070;
}

.ShopCategoringItem {
  border: 2px solid #707070;
  background-color: white;
  border-radius: 5px;
  padding: 5px 15px;
  white-space: nowrap;
  margin: 0 5px;
}

.ShopCategoringItem:hover {
  cursor: pointer;
}

.ShopCategoringItem.active {
  color: red;
}
</style>