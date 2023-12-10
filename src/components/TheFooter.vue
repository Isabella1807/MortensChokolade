<script setup>
import {
  onMounted,
  ref as firebaseRef
} from 'vue';
import { getStorage, ref } from 'firebase/storage';
import footer from '../database/footer';

const storage = getStorage();
let file = ref(null);

onMounted(async () => {
  footerInfo.value = await footer.getAllInformation();
});

// Generere ID med tidsstempel
const fileId = Date.now();

// fil extension fra oprindeligt fil navn
const fileExtension = file.value.name.split('.').pop();

// konstruere nyt filnavn med genereret id og fil extension
const newFileName = `${fileId}.${fileExtension}`;

const newfileName = ref(storage, `images/${newFileName}`);

</script>

<template>
  <input type="image">
</template>