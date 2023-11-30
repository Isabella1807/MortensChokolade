<script setup>
import {ref} from 'vue';

const props = defineProps(['title', 'frontImage', 'price','id','editProduct','addToCart','deleteProduct','isAdmin'])


</script>

<template>
  <div class="shopProduct">
    <div class="shopProductImageContainer">
      <img :src="props.frontImage" alt="Image Tekst">
    </div>
    <div class="productInformationContainer">
      <div>
        <p>{{ props.title }}</p>
        <p>{{ props.price }} DKK</p>
      </div>
      <div class="productAddContainer">
        <button class="productAddProductButton" v-if="!props.isAdmin" @click="() => props.addToCart(props.id)">+</button>
        <div>
          <button class="productAddProductButton" v-if="props.isAdmin" @click="() => props.deleteProduct(props.id)">DEL</button>
          <button class="productAddProductButton" v-if="props.isAdmin" @click="() => props.editProduct(props.id)">EDIT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopProduct {
//border: 2px solid blue; max-height: 350px; color: #707070;
}

.shopProductImageContainer {
  /*border: solid lightseagreen 2px;*/
  /*Fixed the random gap between image and textbox..*/
  margin-bottom: -4px;
}

.shopProductImageContainer img {
//border: solid black 1px; object-fit: cover; width: 100%;
  height: 250px;
}

.productInformationContainer {
//border: solid cadetblue 1px; display: flex; justify-content: space-between;
  background-color: white;
  padding: 10px;
}

.productInformationContainer p {
  font-size: 20px;
}

.productAddContainer {
//border: solid blue 2px; display: flex; align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.productAddProductButton {
//border: solid pink 2px; font-size: 40px; bottom: 0;
  right: 0;
  border: none;
  background-color: transparent;
}

.productAddContainer:hover {
  cursor: pointer;
}

.productAddProductButton:hover {
  cursor: pointer;
}
</style>
