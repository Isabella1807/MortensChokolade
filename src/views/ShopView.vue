<script setup>
import ShopProduct from "@/components/ShopComponents/ShopProduct.vue";
import ShopCategorizer from "@/components/ShopComponents/ShopCategorizer.vue";
import {onMounted, computed, ref} from "vue";
import productDB from "../database/products";

let products = ref([]);

onMounted(async () => {
  products.value = await productDB.getAllProducts();
});

let filteredCategory = ref("");
const setFilterCategory = (category) => {
  filteredCategory.value = category
  console.log("")
}

const filteredProducts = computed(() => {

  if (filteredCategory.value === "") return products.value;

  // Products fungerer ikke uden vi skaffer en liste med .value
  return products.value.filter((item) =>{
    return item.category === filteredCategory.value;
    //ITS THE SAME
    /*if (item.category === filteredCategory.value){
      return true;
    } else {
      return false;
    }*/
  });
})

</script>

<template>
  <div id="ProductCategoring">
    <!--Vi skriver ikke () efter sortitems, fordi funktionen ikke skal køre lige så snart elementet er rendered-->
    <ShopCategorizer
        class="shopProductItems"
        :setCategory="setFilterCategory"
    />
  </div>

  <div id="ProductContainer">
    <ShopProduct
        v-for="product in filteredProducts"
        :title="product.title"
        :frontImage="product.frontImage"
        :price="product.price"
        :category="product.category"/>
  </div>
</template>

<style scoped>
#ProductContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>