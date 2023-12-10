<script setup>
import {
    onMounted,
    ref
} from 'vue';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import footer from "../database/footer";
import { onSnapshot } from 'firebase/firestore';


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
    console.log('Selected file:', file.value.name, 'Size:', file.value.size);
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
    console.log('Uploading file:', file.value?.name, 'Size:', file.value?.size);
    if (!file.value) {
        console.error("No file selected");
        return;
    }

    // Generere ID med tidsstempel
    const fileId = Date.now();

    // fil extension fra oprindeligt fil navn
    const fileExtension = file.value.name.split('.').pop();

    // konstruere nyt filnavn med genereret id og fil extension
    const newFileName = `${fileId}.${fileExtension}`;

    //uploader produktbillede med nyt filnavn
    const imageRef = storageRef(storage, `images/${newFileName}`);
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



/*

  /* uploader produktbillede med nyt filnavn
  const imageRef = storageRef(storage, `images/${newFileName}`);
  const uploadTask = uploadBytesResumable(imageRef, file);

// Generere ID med tidsstempel
const fileId = Date.now();

// fil extension fra oprindeligt fil navn
const fileExtension = file.value.name.split('.').pop();

// konstruere nyt filnavn med genereret id og fil extension
const newFileName = `${fileId}.${fileExtension}`;

const uploadFile = () => {
  const storageRef = ref(Storage, `images/${newFileName}`);
  uploadBytes(storageRef, this.$refs.newFileName.files[0]).then((onSnapshot) => {
    console.log("uploaded")
  })
}

  const storageRef = ref(Storage, `images/${newFileName}`);
  const uploadTask = uploadBytes(storageRef, file.value);
*/

<template>
    <ul>
        <li v-for="info in footerInfo">
            {{ info.footerTitle }} <br>
                {{ info.footerHours }} <br>
                    {{ info.phone }}
                    <!-- <img: src="`../src/assets/images/${info.imageName}.${info.ext}`" alt="">-->
                </li>
            </ul>

            <div class="productForm">

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
                max - width: 500px;
}

            .productForm {
                margin - bottom: 50px;
}
        </style>