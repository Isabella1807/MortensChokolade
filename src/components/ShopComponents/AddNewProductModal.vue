<script setup>
import {ref} from 'vue';
import Modal from "@/components/Modal.vue";
import productDB from "@/database/products";

const formTitle = ref('');
const formDescription = ref('');
const formFImage = ref('');
const formXImages = ref('');
const formPrice = ref('');
const formCategory = ref('');
const dataIsMissing = ref(false);

const showAddProductWindow = () => {
  addProductModalVisible.value = true;
};

const hideAddProductWindow = () => {
  formTitle.value = '';
  formDescription.value = '';
  formFImage.value = '';
  formXImages.value = '';
  formPrice.value = '';
  formCategory.value = '';
  dataIsMissing.value = false;
  addProductModalVisible.value = false;
}

// TJEK OM ALLE VÆRDIER ER SAT. IKKE CREATE HVIS NOGET MANGLER

const submitNewProductForm = () => {
  if (
      formTitle.value === ''
      || formFImage.value === ''
      || formXImages.value === ''
      || formDescription.value === ''
      || formPrice.value === ''
      || formCategory.value === '') {
    dataIsMissing.value = true;
    return;
  }

  //SUPER VIGTIGT DE ER I RIGTIG RÆKKEFØLGE!!!
  productDB.addNewProduct(
      formTitle.value,
      formFImage.value,
      formXImages.value,
      formDescription.value,
      formPrice.value,
      formCategory.value
  );

  hideAddProductWindow();
}

const addProductModalVisible = ref(false);

</script>

<template>
  <div>
    <button @click="showAddProductWindow" class="addProductButton">Tilføj nyt
      produkt</button>

    <Modal title="Lav nyt produkt" v-if="addProductModalVisible">
      <div id="AddTaskWindow">
        <form v-on:submit.prevent="">
          <label for="title">Produkt navn:</label><br>
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
    </Modal>
  </div>
</template>

<style scoped>

</style>