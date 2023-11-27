<script setup>
import { ref } from 'vue';
import productDB from "../database/products";
import footer from '../database/footer';

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
    || formCategory.value === '') {
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



const addNewInformtaionFooter = ref(false);

const formTitleFooter = ref('');
const formHours = ref('');
const formPhone = ref('');

const infoIsMissing = ref(false);

const showNewInformation = () => {
  addNewInformtaionFooter.value = true;
};

const hideNewInformation = () => {
  addNewInformtaionFooter.value = false;

  formTitleFooter.value = '';
  formHours.value = '';
  formPhone.value = '';
  infoIsMissing.value = false;
}


const submitNewInformation = () => {
  if (
    formTitleFooter.value == ''
    || formHours.value === ''
    || formPhone.value === '') {
    infoIsMissing.value = true;
    return;
  }

  footer.addNewInformation(
    formTitleFooter.value,
    formHours.value,
    formPhone.value,
  );

  hideNewInformation();
};

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
    <button @click="showAddProductWindow" class="addProductButton" v-if="!addNewProductWindowVisible">Tilføj nyt
      produkt</button>
  </div>


  <footer>
    <div>
      <div id="AddTaskWindow" v-if="addNewInformtaionFooter">
        <form v-on:submit.prevent="">

          <label for="footerTitle">footerTitle:</label><br>
          <input type="text" id="footer-title" placeholder="Title" v-model="formTitleFooter"><br><br>

          <label for="footerHours">footerHours:</label><br>
          <input type="text" id="footer-hours" placeholder="åbningstider" v-model="formHours"><br><br>

          <label for="phone">phone:</label><br>
          <input type="text" id="footer-phone" placeholder="telefon" v-model="formPhone"><br><br>

          <button type="submit" @click="submitNewInformation" class="infoWindowButton">Tilføj</button>
          <button @click="hideNewInformation" class="infoWindowButton">Luk</button>
        </form>

      </div>
      <button @click="showNewInformation" class="addInfoButton" v-if="!addNewInformtaionFooter">Tilføj footer
        info</button>
    </div>
  </footer>
</template>

<style scoped></style>