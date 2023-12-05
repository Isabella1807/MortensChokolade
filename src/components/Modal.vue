<script setup>
const props = defineProps(['title']);
</script>

<template>
  <div class="modal">
    <h3 class="modalTitle">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<style scoped>
.modal {
  background: white;
  color: #333;
  position: fixed;
  top: 50%;
  left: 50%;

  /*vh height in proportion to view port*/
  transform: translate(-50%, -50%);
  width: clamp(320px, 50vw, 1000px);
/*  height: clamp(200px, 50vh, 800px);*/
}
</style>