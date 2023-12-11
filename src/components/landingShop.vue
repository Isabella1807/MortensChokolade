<script setup></script>
<template>
    <div class="landingShopSetup">
        <div>

            <img class="landingShopImg" src="../assets/images/chokoPlade1.png" alt="">
            <p class="landingShopText">Shop chokoladeplader</p>
        </div>
        <div>
            <img class="landingShopImg" src="../assets/images/juleCacao.png" alt="">
            <p class="landingShopText">Shop varm kakao</p>
        </div>
        <div>
            <img class="landingShopImg" src="../assets/images/coffeeChoko.png" alt="">
            <p class="landingShopText">Shop bland selv chokolade</p>
        </div>
    </div>
</template>
<style>
.landingShopImg {
    width: 350px;
}

.landingShopSetup {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
}

.landingShopText {
    background-color: #3b332ca2;
    padding-top: 10px;
    color: white;
    margin-top: -8px;
    font-size: larger;
}

@media screen and (max-width: 600px) {
    .landingShopSetup {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
}
</style>