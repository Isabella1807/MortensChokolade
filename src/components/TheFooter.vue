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
let productPrice = ref(0);

onMounted(async () => {
  footerInfo.value = await footer.getAllInformation();
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  // håndtere fil upload
};

const uploadProduct = async () => {
  // uploader produktbillede
  const imageRef = storageRef(storage, 'images/product_image.jpg');
  const uploadTask = uploadBytesResumable(imageRef, /* your file here */);

  uploadTask.on('state_changed',
    () => { },  // Progress function (optional)
    () => { },  // Error function (optional)
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log('File available at', downloadURL);

      // Here, you can add logic to store product information with the downloadURL in your database
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

  <div>
    <input type="file" @change="handleFileUpload">
    <input v-model="productName" placeholder="Product Name">
    <textarea v-model="productDescription" placeholder="Product Description"></textarea>
    <input type="number" v-model="productPrice" placeholder="Product Price">
    <button @click="uploadProduct">Upload Product</button>
  </div>
</template>

<style scoped>
/*temp max size until fixed <3*/
footer img {
  max-width: 500px;
}
</style>