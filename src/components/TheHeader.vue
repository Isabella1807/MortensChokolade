<script setup>
import {useRouter} from 'vue-router';
import {computed, ref} from 'vue';

const props = defineProps(['isAdmin', 'setIsAdmin']);

const router = useRouter();
const path = computed(() => router.currentRoute);
const adminLogout = () => {
  props.setIsAdmin(false);

  //Reroute til forsiden på logud, medmindre de er på shop
  if (path.value.value.path !== "/shop") {
    router.push('/');
  }
}

const burgerIsMenuClicked = ref(false);
const burgerMenuClick = () => {
  burgerIsMenuClicked.value = !burgerIsMenuClicked.value;
}
</script>

<template>
  <header id="header">
    <div class="headerHelperContainer">
      <div class="headerItemsContainer">

        <div class="burgerContainerLogo"  @click="burgerMenuClick">
          <i class="fa fa-bars"></i>
        </div>

        <div class="headerLogo">
          <router-link to="/" class="headerLogoRouter">
            <img src="../assets/MortensLogo.png" alt="Mortens Chokolade Logo">
          </router-link>
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
              <router-link to="/admin" class="routerlink" v-if="props.isAdmin">admin</router-link>
            </p>
            <p class="routerlink" v-if="props.isAdmin" @click="adminLogout">log ud</p>
          </nav>
        </div>
        <div class="headerCartIcon">
          <img src="../assets/cart.png" alt="Shopping Cart">
        </div>
      </div>

      <div class="burgerMenu" v-if="burgerIsMenuClicked">
        <div class="brugerMenuItems">
          <p>
            <router-link to="/" class="routerlink">home</router-link>
          </p>
          <br>
          <p>
            <router-link to="/shop" class="routerlink">shop</router-link>
          </p>
          <br>
          <p>
            <router-link to="/admin" class="routerlink" v-if="props.isAdmin">admin</router-link>
          </p>
          <p class="routerlink" v-if="props.isAdmin" @click="adminLogout">log ud</p>
        </div>
      </div>

    </div>
  </header>

</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

.headerHelperContainer {
  width: 100%;
}

.headerItemsContainer {
  display: flex;
  align-items: center;
  background-color: rgba(59, 51, 44, 0.77);
  height: 140px;
}

.headerLogo {
  margin: 40px;
}

.headerLogo img {
  width: 180px;
  height: 80px;
}

.navHelperContainer {
  width: 100%;
  padding: 0 20px;
}

.headerNav {
  display: flex;
}

.headerNav p {
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
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}

.router-link-active:after,
.routerlink:hover:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.headerNav p:hover:after {
  width: 100%;
  left: 0;
}

.headerCartIcon {
  height: max-content;
  margin: 40px;
}

.headerCartIcon img {
  max-height: 50px;
}

.headerCartIcon:hover {
  cursor: pointer;
}

.burgerContainerLogo {
  border: solid pink 2px;
  width: 40px;
  display: none;
}

.burgerMenu{
  display: none;
}

@media only screen and (max-width: 950px) {
  .burgerMenu{
    display: block;
  }
  .navHelperContainer {
    display: none;
  }

  .headerItemsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .burgerContainerLogo{
    display: block;
  }
}

@media only screen and (max-width: 470px) {
  .headerItemsContainer {
    height: 100px;
  }

  .headerLogo {
    margin: 20px;
  }

  .headerLogo img {
    width: 140px;
    height: 60px;
  }

  .headerCartIcon {
    margin: 20px;
  }

  .headerCartIcon img {
    max-height: 40px;
  }
}
</style>