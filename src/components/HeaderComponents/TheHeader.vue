<script setup>

</script>

<template>
  <header id="header">
    <div class="headerHelperContainer">
      <div class="headerItemsContainer">
        <div class="headerLogo">
          <img src="../../assets/MortensLogo.png" alt="Mortens Chokolade Logo">
        </div>
        <div class="navHelperContainer">
          <nav class="headerNav">
            <p>
              <router-link to="/" exact tag="li">home</router-link>
            </p>
            <br>
            <p>
              <router-link to="/shop" exact tag="li">shop</router-link>
            </p>
            <br>
            <p>
              <router-link to="/admin" exact tag="li">admin</router-link>
            </p>
          </nav>
        </div>
        <div class="headerCartIcon">
          <img src="../../assets/cart.png" alt="Shopping Cart">
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
}

.headerHelperContainer {
  position: absolute;
  width: 100%;
}

.headerItemsContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(59, 51, 44, 0.77);
  height: 140px;
}

.headerLogo {
//border: solid blue 2px;
  margin: 40px;
}

.headerLogo img {
  width: 180px;
  height: 80px;
  /*max-width: 25%;
  max-width: 100%;
  height: auto;*/
}

.navHelperContainer {
  border: solid blue 2px;
  width: 100%;
}

.headerNav {
  display: flex;
  border: solid red 2px;
}

/*.headerNav p{

}*/

.router-link-exact-active {
  background: yellow;
  border-radius: 5px;
  color: red;
  font-style: italic;
}

.headerCartIcon {
  border: solid green 2px;
  height: max-content;
  margin: 40px;
}
</style>