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
              <router-link to="/" class="routerlink">home</router-link>
            </p>
            <br>
            <p>
              <router-link to="/shop" class="routerlink">shop</router-link>
            </p>
            <br>
            <p>
              <router-link to="/admin" class="routerlink">admin</router-link>
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
  /*border: solid blue 2px;*/
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
  /*border: solid blue 2px;*/
  width: 100%;
  padding: 0 20px;
}

.headerNav {
  display: flex;
  /*border: solid red 2px;*/
}

.headerNav p{
  font-size: 30px;
  margin: 0 30px;
}

.routerlink {
  color: #CBCBCB;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.routerlink:after {
  content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 2px solid;
  margin-top: 10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0,1);
  transform: scale(0,1);
}
.router-link-active:after,
.routerlink:hover:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.headerNav p:hover:after{
  width: 100%;
  left: 0;
}

/*.router-link-exact-active {
  border-radius: 5px;
  color: #CBCBCB;
}*/

.headerCartIcon {
  border: solid green 2px;
  height: max-content;
  margin: 40px;
}
</style>