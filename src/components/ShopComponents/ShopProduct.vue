<script setup>

const props = defineProps(['title', 'frontImage', 'price'])

// defineProps({
//   title: String,
//   frontImage: String,
//   price: Number,
// })
</script>

<template>
  <div>
    <img src={{props.frontImage}} alt="Image Tekst">
    <div>
      <p>{{ props.title }}</p>
      <p>{{ props.price }}</p>
      <button>tilføj</button>
    </div>
  </div>
</template>

<style scoped>

</style>