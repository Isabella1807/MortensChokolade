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
  if (adminLogin.username === adminName.value && adminLogin.password === adminPassword.value) {
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
      <form class="adminLoginForm">
        <div>
          <label for="brugernavn">Brugernavn:</label>
          <input type="text" id="brugernavn" placeholder="Indtast brugernavn" v-model="adminName">
        </div>
        <div>
          <label for="kodeord">Kodeord:</label>
          <input type="password" id="kodeord" placeholder="Indtast kodeord" v-model="adminPassword">
          <div v-if="errorInLogin" class="errorContainer">
            <p>Brugernavn eller kodeord forkert</p>
          </div>
        </div>


        <div class="adminLoginButtonContainer">
          <button type="submit" @click="loginAsAdmin" class="adminLoginButton"> Log ind</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.headerSpacer {
  height: 140px;
  background-color: beige;
}

.errorContainer {
  color: red;
  margin: 10px 0;
}

.adminLoginContainer {
  display: flex;
  justify-content: center;
}

.adminLoginForm {
  display: grid;
  gap: 10%;
  width: 50%;
  height: 50%;
  margin: 5%;
  padding: 5%;
}

.adminLoginForm label {
  font-size: 25px;
}

.adminLoginForm input {
  border: solid grey 2px;
  width: 100%;
  font-size: 25px;
  padding: 5px;
}

.adminLoginButtonContainer button {
  border: solid grey 2px;
  font-size: 25px;
  padding: 10px 45px;
  background-color: white;
}

.adminLoginButton:hover {
  cursor: pointer;
  border: solid darkgray 2px;
  background-color: grey;
  color: white;

}
</style>