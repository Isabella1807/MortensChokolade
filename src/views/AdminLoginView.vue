<script setup>
import {ref} from 'vue';

const props = defineProps(['isAdmin', 'setIsAdmin'])

const adminLogin = {
  username: "admin",
  password: "qwe"
}

const adminName = ref('');
const adminPassword = ref('');

let errorInLogin = false;
const loginAsAdmin = () => {
  if (adminLogin.username === adminName.value && adminLogin.password === adminPassword.value){
    props.setIsAdmin(true);
    adminName.value = '';
    adminPassword.value = '';
  } else {
    errorInLogin = true;
  }
}

</script>

<template>
  <div>
    <div class="headerSpacer"></div>
    <div class="adminLoginContainer">
      <div class="adminLoginFormContainer">
        <form class="adminLoginForm">
          <label for="brugernavn">Brugernavn:</label><br>
          <input type="text" id="brugernavn" placeholder="Indtast brugernavn" v-model="adminName"><br><br>

          <label for="kodeord">Kodeord:</label><br>
          <input type="password" id="kodeord" placeholder="Indtast kodeord" v-model="adminPassword"><br><br>

          <div>
            <button type="submit" @click="loginAsAdmin"> Log ind</button>
          </div>
        </form>
        <div v-if="errorInLogin" class="errorContainer">
          <p>Brugernavn eller kodeord forkert</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerSpacer {
  height: 140px;
  background-color: deeppink;
}

.errorContainer{
  color: red;
  margin: 10px 0;
}
</style>