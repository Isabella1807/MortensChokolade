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
  return products.value.filter((item) => {
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
  <div id="shopContainer">
    <div class="testiiing">
      <div id="productCategoring">
        <!--Vi skriver ikke () efter sortitems, fordi funktionen ikke skal køre lige så snart elementet er rendered-->
        <ShopCategorizer
            class="shopProductItems"
            :setCategory="setFilterCategory"
        />
      </div>

      <div id="productContainer">
        <ShopProduct
            v-for="product in filteredProducts"
            :title="product.title"
            :frontImage="product.frontImage"
            :price="product.price"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#shopContainer {
  //margin: 0 200px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  max-width: 100%;
}

.testiiing {
  width: 100%;
  max-width: 1400px;
}

#productContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //border: solid deeppink 2px;
  gap: 80px;
}

@media only screen and (max-width: 800px) {
  #productContainer {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media only screen and (max-width: 600px) {
  #productContainer {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
}
</style>