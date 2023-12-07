<script setup>
import bannerVideo from '../components/bannerVideo.vue';
</script>

<template>
  <bannerVideo />

  <div class="landingScript">
    <h1 class="landingScriptHeader">Prisvindende kvalitetschokolade</h1>
    <p class="landingScripttext">Chokoladeværksted på Vintappestræde i Odense med både klassiske chokolader og innovative
      smage,
      håndlavet på bæredygtig belgisk chokolade.</p>
  </div>

  <div class="aboutMorten">
    <img class="aboutMortenPortrait" src="../assets/portrait.png" alt="">
    <p class="aboutMortenText">Morten flyttede til Odense og åbnede sin chokoladebutik i 2019, med en ambition om at
      Odenseanerne skulle have
      adgang til speciallavet chokolade, håndlavet på bæredygtig belgisk chokolade. <br> <br>

      Chokoladen blev så populær, at der var nu blev forespørgsel på en webshop, hvor man kunne få leveret chokoladen
      direkte hjem i stuen og man kan nu nyde Mortens lækre chokolade rundt i hele landet. <br> <br>

      Morten har en baggrund indenfor grafisk design og har brugt sin viden til udformning af Mortens Chokolades brand med
      inspiration fra modebranchen. <br> <br>

      Der er fokus på kvalitet, bæredygtighed og smag. Samtidig, så bruger han sin chokolade til at udfolde sig kreativt,
      så man får altid en unik smagsoplevelse, hver gang, uden at gå på kompromis med smag - Morten tester jævnligt sine
      smage, for at sikre sig kvaliteten altid er i top.
    </p>
  </div>
  <div>
    <div>
      <h2>Mortens chokolade blog</h2>
    </div>
    <div>
      <img src="../assets/portrait.png" alt="">
    </div>
    <div>
      <p>Julen i chokoladebutikken 2023
        I år består Mortens Julekollektion af:
        Mørk chokolade med pomerans
        Mørk chokolade med </p>
    </div>
  </div>
</template>

<style scoped>
.landingScript {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;
  margin-left: 25%;
  line-height: 30px;
  margin-top: 10%;
}

.landingScriptHeader {
  margin-bottom: 10px;
}

.aboutMorten {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  background-color: #3B332C;
  padding-top: 5%;
  padding-bottom: 5%;
  color: white;
  margin-top: 10%;
}

.aboutMortenPortrait {
  width: 35%;
  height: fit-content;
}

.aboutMortenText {
  width: 30%;
  line-height: 30px;
}
</style>