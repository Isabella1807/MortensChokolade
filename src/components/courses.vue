<script setup>
</script>

<template>
    <div>
        <img class="courseHeadImage" src="../assets/images/kurser1.jpg" alt="">
    </div>

    <div class="completeCourse">
        <div class="courseText">
            <p>
                Kom til kursus hos Mortens chokolade <br> <br>

                Vi tilbyder flere forskellige kurser, giv dig i kast med chokolade temperering. Temperering af chokolade har
                fået ry for at være en mindre videnskab og utrolig svært at kaste sig ud i, men med chokolademagerens få
                tips og
                tricks er det slet ikke så svært. <br>
                Lav din egn flødeboller. Chokolademager Morten Aagaard vil i løbet af kurset guide deltagerne igennem
                hvordan
                man laver en lækker flødebolle helt fra bunden, som du selvfølgelig får lov til at nyde efterfølgende. <br>
                <br>

                Vi tilbyder også heldagskurser, oplæg eller polterabend arrangementer.
            </p>
            <button class="courseButton">læs mere</button>
        </div>

        <div class="imageBlockSetup">
            <div class="imageBlock1">
                <img class="courseimage2" src="../assets/images/kurser2.jpg" alt="">
                <img class="courseimage3" src="../assets/images/kurser3.jpg" alt="">
            </div>

            <div class="imageBlock2">
                <img class="courseimage4" src="../assets/images/kurser4.jpg" alt="">
                <img class="courseimage5" src="../assets/images/kurser5.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style>
.courseHeadImage {
    width: 100%;
}

.courseText {
    width: 350px;
    line-height: 30px;
}

.courseButton {
    width: 150px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 2px;
    margin-top: 20px;
}

.courseimage2 {
    width: 350px;
    height: 250px;
}

.courseimage3 {
    width: 350px;
    height: 250px;
}

.courseimage4 {
    width: 350px;
    height: 250px;
}

.courseimage5 {
    width: 350px;
    height: 250px;
}

.imageBlock1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.imageBlock2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.imageBlockSetup {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.completeCourse {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>