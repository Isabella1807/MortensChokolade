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
      <li v-for="info in footerInfo">
        {{ info.footerTitle }} <br>
        {{ info.footerHours }} <br>
        {{ info.phone }}
        <img src="assets/images/" alt="">
      </li>
    </ul>
  </footer>
</template>

<style scoped>
</style>