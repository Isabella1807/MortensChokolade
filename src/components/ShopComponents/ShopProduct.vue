<script setup>

const props = defineProps(['title', 'frontImage', 'price'])

</script>

<template>
  <div class="shopProduct">
    <img :src="props.frontImage" alt="Image Tekst">
    <div>
      <p>{{ props.title }}</p>
      <p>{{ props.price }}</p>
      <button>tilføj</button>
    </div>
  </div>
</template>

<style scoped>
.shopProduct{
  border: 2px solid blue;
}
</style>