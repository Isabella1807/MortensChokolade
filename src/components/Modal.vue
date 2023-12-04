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
  background: pink;
  color: #333;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(320px, 50vw, 500px);
/*vh height in proportion to view port*/
}
</style>