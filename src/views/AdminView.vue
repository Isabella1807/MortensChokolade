<script setup>
import {onMounted, ref} from 'vue';
import productDB from "../database/products";

onMounted(async () => {
  console.log('JEG ER LIGE STARTET');
  //extraImages HAVE to be an array, price HAVE to be a number, and dont skip any parameters
  /*productDB.addNewProduct(
      "fff",
      "g.png",
      ["hejs.png", "ghgh.png"],
      "jjj",
      3,
      "kategori"
  );*/
  const allProducts = await productDB.getAllProducts('gris');
  console.log(allProducts);
});
</script>
 
<template>
  <div>
    <form>
      <label for="title">Title:</label><br>
      <input type="text" id="title" placeholder="Title"><br><br>

      <label for="frontImage">frontImage:</label><br>
      <input type="text" id="frontImage" placeholder="frontImage"><br><br>

      <label for="extraImages">extraImages:</label><br>
      <input type="text" id="extraImages" placeholder="extraImages"><br><br>

      <label for="description">description:</label><br>
      <input type="text" id="description" placeholder="description"><br><br>

      <label for="price">price:</label><br>
      <input type="text" id="price" placeholder="price"><br><br>

      <label for="category">category:</label><br>
      <input type="text" id="category" placeholder="category"><br><br>
      <br>
      <button type="submit">Tilføj produkt</button>

    </form>
  </div>
</template>

<style scoped>

</style>