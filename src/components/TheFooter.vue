<script setup>
import {
  onMounted,
  ref
} from 'vue';
import footer from '../database/footer';


let footerInfo = ref([]);

onMounted(async () => {
  footerInfo.value = await footer.getAllInformation();
});

</script>

<template>
  <ul>
    <li v-for="info in footerInfo">
      <div>{{ info.footerTitle }} </div> <br>
      {{ info.footerHours }} <br>
      {{ info.phone }}

    </li>
  </ul>
</template>