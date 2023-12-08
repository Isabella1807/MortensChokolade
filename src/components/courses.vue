<script setup>
</script>

<template>
    <div>
        <img class="courseHeadImage" src="../assets/images/kurser1.jpg" alt="">
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
</template>

<style>
.courseHeadImage {
    width: 100%;
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
</style>