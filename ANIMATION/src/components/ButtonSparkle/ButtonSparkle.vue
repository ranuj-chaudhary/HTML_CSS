<template>
  <a class="button-link">
    <div class="button__content">
      <span class="button__text flex justify-center items-center gap-4"
        >Download <Icon icon="typcn:cloud-storage" width="40" height="40"
      /></span>

      <div class="button__reflection-1"></div>
      <div class="button__reflection-2"></div>
    </div>

    <img src="/images/star.png" alt="" class="button__star-1" />
    <img src="/images/star.png" alt="" class="button__star-2" />
    <img src="/images/circle.png" alt="" class="button__circle-1" />
    <img src="/images/circle.png" alt="" class="button__circle-2" />
    <img src="/images/diamond.png" alt="" class="button__diamond" />
    <img src="/images/triangle.png" alt="" class="button__triangle" />

    <div class="button__shadow"></div>
  </a>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.component-wrapper {
  /* Define scoped variables here */
  --gradient-color: linear-gradient(
    90deg,
    hsl(48, 100%, 50%) 0%,
    hsl(28, 100%, 54%, 100%)
  );
  --black-color: hsl(225, 15%, 6%);
  --reflection-color: hsla(48, 30%, 95%, 0.3);
  --body-color: hsl(48, 100%, 98%);
  --body-font: "Montserrat", sans-serif;
  --normal-font-size: 1rem;
}
.button-link {
  position: relative;
}

.button__content {
  padding: 20px 80px;
  background: linear-gradient(
    90deg,
    hsl(48, 100%, 50%) 0%,
    hsl(28, 100%, 54%, 100%)
  );
  font-size: 22px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  overflow: hidden;
  border: 3px solid var(--black-color);
  z-index: 5;
  font-weight: bold;
}

.button__shadow {
  padding: 20px 80px;
  background: linear-gradient(
    90deg,
    hsl(48, 100%, 50%) 0%,
    hsl(28, 100%, 54%, 100%)
  );
  font-size: 22px;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid var(--black-color);
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 5;
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 1;
}

.button-link:active .button__content {
  transform: scale(80%);
}

.button-link:active .button__shadow {
  transform: scale(80%);
  top: 10px;
  left: 10px;
}
.button-link:active {
  transform: rotate(-5deg);
}
.button__text {
  position: relative;
  z-index: 5;
}

.button__reflection-2,
.button__reflection-1 {
  width: 10px;
  height: 120px;
  background-color: var(--reflection-color);
  position: absolute;
  rotate: 30deg;
  top: -20px;
  margin: 0 auto;
  inset: 0;
  left: -160%;
  top: -20px;
  transition: all 0.6s ease-in;
  z-index: 2;
}
.button__reflection-1::before {
  content: "";
  width: 40px;
  height: 130px;
  position: absolute;
  top: -20px;
  left: 1rem;
  background-color: var(--reflection-color);
}
.button__reflection-2::before {
  content: "";
  width: 20px;
  height: 130px;
  position: absolute;
  top: -20px;
  left: 1.5rem;
  background-color: var(--reflection-color);
}

.button-link:active .button__reflection-1 {
  left: -80%;
}

.button-link:active .button__reflection-2 {
  left: 120%;
}
/* IMAGES */
.button-link img {
  width: 20px;
  position: absolute;
  transition: all 0.6s ease;
  transform: scale(1);
  rotate: 30deg;
  z-index: 2;
}
.button__star-1 {
  top: 10px;
  left: 10px;
}
.button-link:active .button__star-1 {
  top: -20px;
  left: -20px;
  transform: scale(0.8) rotate(-60deg);
}

.button__star-2 {
  width: 30px;
  top: 30px;
  right: 30px;
}
.button-link:active .button__star-2 {
  top: -20px;
  right: -10px;
  transform: scale(2.5) rotate(60deg);
}

.button__circle-1 {
  top: 2px;
  left: 70px;
}
.button-link:active .button__circle-1 {
  top: -24px;
  right: 10px;
  transform: scale(0.5) rotate(60deg);
}
.button__circle-2 {
  bottom: 2px;
  right: 70px;
}
.button-link:active .button__circle-2 {
  bottom: -25px;
  right: 70px;
  transform: scale(0.5) rotate(60deg);
}
.button__diamond {
  top: 10px;
  right: 80px;
}
.button-link:active .button__diamond {
  top: -10px;
  right: 80px;
  transform: scale(0.9) rotate(180deg);
}
.button__triangle {
  bottom: 10px;
  left: 40px;
}
.button-link:active .button__triangle {
  bottom: -20px;
  left: 20px;
  transform: scale(2) rotate(180deg);
}
</style>
