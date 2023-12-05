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
    <button @click="showAddProductWindow" class="addProductButton">
      <img src="../../assets/images/add.png" alt="tilføj nyt produkt">
    </button>

    <Modal title="Lav nyt produkt" v-if="addProductModalVisible">
      <div id="AddTaskWindow">
        <form v-on:submit.prevent="">

          <div class="addProductContainer">
            <div class="addProductAddImageContainer">
              <input type="text" id="frontImage" placeholder="Upload billede  +" v-model="formFImage">
            </div>
            <div class="rightSectionItems">
              <div class="addProductInputContainer">
                <input type="text" id="title" placeholder="Title" v-model="formTitle">
                <!--<input type="text" id="extraImages" placeholder="extraImages" v-model="formXImages"><br><br>-->
                <input type="text" id="price" placeholder="price" v-model="formPrice">
                <input type="text" id="category" placeholder="category" v-model="formCategory">
                <input type="text" id="description" placeholder="description" v-model="formDescription">
              </div>
            </div>
          </div>

          <div class="addProductModalButtonsContainer">
            <button @click="hideAddProductWindow" class="productWindowButton">Annuller</button>
            <button type="submit" @click="submitNewProductForm" class="productWindowButton">Tilføj produkt</button>

            <div v-if="dataIsMissing">
              <p class="missingDataText">Alle felter ikke udfyldt</p>
            </div>
          </div>

        </form>
      </div>
    </Modal>
  </div>
</template>

<style scoped>
#AddTaskWindow {
  border: solid blue 2px;
}

.addProductContainer {
  border: solid pink 2px;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.addProductButton {
  width: 100%;
  height: 100%;
  padding: 100px;
  border: none;
  background-color: white;
}

.addProductButton:hover {
  cursor: pointer;
}

.addProductAddImageContainer {
  border: solid grey 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rightSectionItems{
  /*border: solid blue 2px;*/
}

.addProductAddImageContainer input {
  font-size: 25px;
  border: solid grey 2px;
  width: 75%;
}

.addProductAddImageContainer input::placeholder {
  text-align: center;
}

.addProductInputContainer {
  /*border: solid green 2px;*/
  display: grid;
  gap: 30px;
}

.addProductInputContainer input {
  width: 100%;
  font-size: 30px;
  padding: 5px;
  border: solid grey 2px;
}

.addProductModalButtonsContainer {
  /*border: solid deeppink 2px;*/
  display: flex;
  justify-content: right;
}

.addProductModalButtonsContainer button {
  font-size: 25px;
  padding: 10px 30px;
}
</style>