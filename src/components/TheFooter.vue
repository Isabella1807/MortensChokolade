<script setup>
import { onMounted, ref } from 'vue';
import footer from "../database/footer";

let footerInfo = ref([]);

onMounted(async () => {
  footerInfo.value = await footer.getAllInformation();
});


</script>

<template>
  <footer>
    <ul>
      <li v-for="info in footerInfo" :key="info.id">
        {{ info.footerTitle }} <br>
        {{ info.footerHours }} <br>
        {{ info.phone }}
        <img :src="`../src/assets/images/${info.imageName}.${info.ext}`" alt="">
      </li>
    </ul>
  </footer>
</template>

<style scoped>
/*temp max size until fixed <3*/
footer img{
  max-width: 500px;
}
</style>