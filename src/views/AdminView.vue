<script setup>
import {ref} from 'vue';
import productDB from "../database/products";

const addNewProductWindowVisible = ref(false);

const formTitle = ref('');
const formDescription = ref('');
const formDuration = ref('');
const formFImage = ref('');
const formXImages = ref('');
const formPrice = ref('');
const formCategory = ref('');
const dataIsMissing = ref(false);

const showAddProductWindow = () => {
  addNewProductWindowVisible.value = true;
};

const hideAddProductWindow = () => {
  addNewProductWindowVisible.value = false;
  formTitle.value = '';
  formDescription.value = '';
  formFImage.value = '';
  formXImages.value = '';
  formPrice.value = '';
  formCategory.value = '';
  dataIsMissing.value = false;
}

// TJEK OM ALLE VÆRDIER ER SAT. IKKE CREATE HVIS NOGET MANGLER
const submitNewProductForm = () => {
  if (
      formTitle.value === ''
      || formDescription.value === ''
      || formFImage.value === ''
      || formXImages.value === ''
      || formPrice.value === ''
      || formCategory.value === '')
  {
    dataIsMissing.value = true;
    return;
  }

  productDB.addNewProduct(
      formTitle.value,
          formDescription.value,
          formDuration.value,
          formFImage.value,
          formXImages.value,
          formPrice.value,
          formCategory.value
  );

  hideAddProductWindow();
}

</script>

<template>
  <div>
    <div id="AddTaskWindow" v-if="addNewProductWindowVisible">
      <form v-on:submit.prevent="">
        <label for="title">Title:</label><br>
        <input type="text" id="title" placeholder="Title" v-model="formTitle"><br><br>

        <label for="frontImage">frontImage:</label><br>
        <input type="text" id="frontImage" placeholder="frontImage" v-model="formFImage"><br><br>

        <label for="extraImages">extraImages:</label><br>
        <input type="text" id="extraImages" placeholder="extraImages" v-model="formXImages"><br><br>

        <label for="description">description:</label><br>
        <input type="text" id="description" placeholder="description" v-model="formDescription"><br><br>

        <label for="price">price:</label><br>
        <input type="text" id="price" placeholder="price" v-model="formPrice"><br><br>

        <label for="category">category:</label><br>
        <input type="text" id="category" placeholder="category" v-model="formCategory"><br><br>
        <br>

        <button type="submit" @click="submitNewProductForm" class="productWindowButton">Tilføj</button>
        <button @click="hideAddProductWindow" class="productWindowButton">Luk</button>

        <div v-if="dataIsMissing">
          <p class="missingDataText">Alle felter ikke udfyldt</p>
        </div>

      </form>
    </div>
    <button @click="showAddProductWindow" class="addProductButton" v-if="!addNewProductWindowVisible">Tilføj nyt produkt</button>
  </div>
</template>

<style scoped>

</style>