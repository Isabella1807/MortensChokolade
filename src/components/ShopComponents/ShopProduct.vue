<script setup>

const props = defineProps(['title', 'frontImage', 'price'])

</script>

<template>
  <div class="shopProduct">
    <div class="shopProductImageContainer">
      <img :src="props.frontImage" alt="Image Tekst">
    </div>
    <div class="productInformationContainer">
      <div>
        <p>{{ props.title }}</p>
        <p>{{ props.price }}</p>
      </div>
      <div class="productAddContainer">
        <button class="productAddProductButton">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopProduct {
  //border: 2px solid blue;
  max-height: 350px;
}

.shopProductImageContainer {
  /*border: solid lightseagreen 2px;*/
  /*Fixed the random gap between image and textbox..*/
  margin-bottom: -4px;
}

.shopProductImageContainer img {
  //border: solid black 1px;
  object-fit: cover;
  width: 100%;
  height: 250px;
}

.productInformationContainer {
  //border: solid cadetblue 1px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
}

.productAddContainer{
  border: solid blue 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  //padding: 10px 20px;
}
.productAddProductButton{
  //border: solid pink 2px;
  font-size: 40px;
  bottom: 0;
  right: 0;
  border: none;
  background-color: transparent;
}

.productAddContainer:hover{
  cursor: pointer;
}
.productAddProductButton:hover{
  cursor: pointer;
}
</style>