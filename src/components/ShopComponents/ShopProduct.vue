<script setup>

const props = defineProps(['title', 'frontImage', 'price','category'])

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
      <p class="red">{{props.category}}</p>
      <button>tilføj</button>
    </div>
  </div>
</template>

<style scoped>
.red{
  color: red;
}
</style>