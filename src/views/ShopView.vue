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
  <div class="shopBannerContainer">
    <img src="../assets/shopBanner.png" alt="Banner showing delicious chocolates">
  </div>
  <div id="shopContainer">
    <div class="shopContainerHelper">
      <div id="productCategoring">
        <!--Vi skriver ikke () efter sortitems, fordi funktionen ikke skal køre lige så snart elementet er rendered-->
        <ShopCategorizer
            class="shopProductItems"
            :setCategory="setFilterCategory"
            :selectedCategory="filteredCategory"
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
  display: flex;
  justify-content: center;
  padding: 0 20px;
  max-width: 100%;
}

.shopBannerContainer {
  /*border: solid deeppink 2px;*/
  box-shadow: 0px -4px 10px 9px rgba(0,0,0,0.46);
  -webkit-box-shadow: 0px -4px 10px 9px rgba(0,0,0,0.46);
  -moz-box-shadow: 0px -4px 10px 9px rgba(0,0,0,0.46);
}

.shopBannerContainer img {
  display: block;
  object-fit: cover;
  width: 100%;
  max-height: 50vh;
}

.shopContainerHelper {
  width: 100%;
  max-width: 1400px;
}

#productCategoring {
  padding: 100px 80px;
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

  #productCategoring {
    padding: 40px 0;
    font-size: 13px;
  }
}
</style>