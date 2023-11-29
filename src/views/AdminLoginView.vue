<script setup>
const props = defineProps(['isAdmin', 'setIsAdmin'])
const loginAsAdmin = () => {

  // check username and password

  // if they are correct:
  props.setIsAdmin(true);
}

</script>

<template>
  <div>
    <div class="headerSpacer"></div>
    <div class="adminLoginContainer">
      <div class="adminLoginFormContainer">
        <form class="adminLoginForm">
          <label for="brugernavn">Brugernavn:</label><br>
          <input type="text" id="brugernavn" placeholder="Indtast brugernavn"><br><br>

          <label for="kodeord">Kodeord:</label><br>
          <input type="password" id="kodeord" placeholder="Indtast kodeord"><br><br>

          <div>
            <button type="submit" @click="() => loginAsAdmin"> Log ind</button>
            <h1>{{props.isAdmin}}</h1>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerSpacer {
  height: 140px;
  background-color: deeppink;
}
</style>