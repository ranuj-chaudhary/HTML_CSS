<script setup>
import AnimationEffects from "./components/AnimationEffects/AnimationEffects.vue";
import ButtonSparkle from "./components/ButtonSparkle/ButtonSparkle.vue";
import FloatingMenu from "./components/FloatingMenu/FloatingMenu.vue";
import MotionHoveEffect from "./components/MotionHoveEffect.vue";
</script>

<template>
  <main class="main-container flex gap-8 flex-wrap">
    <div
      class="size-[400px] border-2 flex items-center justify-center bg-blue-400 button-container"
    >
      <ButtonSparkle />
    </div>
    <div class="size-[400px] border-2 bg-blue-400 button-container">
      <FloatingMenu />
    </div>
    <div class="size-[400px] border-2 bg-blue-400 button-container">
      <MotionHoveEffect />
    </div>
    <AnimationEffects />
  </main>
</template>

<style scoped>
.main-container {
  background: black;
  padding: 2rem;
}
</style>
