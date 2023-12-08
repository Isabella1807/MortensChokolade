<script setup>
import {
  onMounted,
  ref
} from 'vue';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import footer from "../database/footer";


const storage = getStorage();

let footerInfo = ref([]);
let productName = ref('');
let productDescription = ref('');
let productPrice = ref('');
let file = ref(null);

onMounted(async () => {
  footerInfo.value = await footer.getAllInformation();
});

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
  // håndtere fil upload
};

/* 
hvor mange produkter findes der
lig 1 til, det er mit id for det nye produkt
produktet skal have dette id og billedet skal have det som navn
hvad er det for en filtype
navngiv billedet id.filtype


random id sekvens

navnet - mellemrum med random genereret tal som id.
*/

const uploadProduct = async () => {
  // uploader produktbillede
  const imageRef = storageRef(storage, 'images/product_image2.jpg');
  const uploadTask = uploadBytesResumable(imageRef, file);

  uploadTask.on('state_changed',
    () => { },
    () => { },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log('File available at', downloadURL);


    }
  );
};





</script>

<template>
  <ul>
    <li v-for="info in footerInfo">
      {{ info.footerTitle }} <br>
      {{ info.footerHours }} <br>
      {{ info.phone }}
      <!-- <img :src="`../src/assets/images/${info.imageName}.${info.ext}`" alt="">-->
    </li>
  </ul>

  <div class="productForm">
    <input type="file" @change="handleFileUpload">
    <input v-model="productName" placeholder="Product Name">
    <textarea v-model="productDescription" placeholder="Product Description"></textarea>
    <input type="number" v-model="productPrice" placeholder="Product Price">
    <button @click="uploadProduct" @change="handleFileUpload">Upload Product</button>
  </div>
</template>

<style scoped>
/*temp max size until fixed <3*/
footer img {
  max-width: 500px;
}

.productForm {
  margin-bottom: 50px;
}
</style>