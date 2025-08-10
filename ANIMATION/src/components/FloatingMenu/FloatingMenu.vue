<template>
  <div class="floating">
    <div class="floating__container">
      <div
        class="floating__toggle"
        :class="toggle ? 'active' : ''"
        id="floating-toggle"
        @click="toggleValue"
      >
        <Icon
          icon="ic:baseline-plus"
          class="plus_icon"
          width="24"
          height="24"
        />
      </div>
      <ul class="">
        <a href="#" class="floating__link">
          <div class="floating__icon">
            <Icon icon="mdi:pencil-outline" width="24" height="24" />
          </div>
        </a>

        <a href="#" class="floating__link">
          <div class="floating__icon">
            <Icon icon="pixel:image" width="24" height="24" />
          </div>
        </a>

        <a href="#" class="floating__link">
          <div class="floating__icon">
            <Icon icon="material-symbols:mic-rounded" width="24" height="24" />
          </div>
        </a>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
let toggle = ref(false);
function toggleValue() {
  toggle.value = !toggle.value;
}
</script>

<style scoped>
.floating {
  position: relative;
  width: 300px;
  height: 300px;
}
.floating__container {
  position: absolute;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating__toggle {
  position: absolute;
  z-index: 10;
}
.floating__toggle {
  padding: 20px;
  background: rgba(175, 190, 255, 0.87);
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 6px 6px 5px 0px rgb(0, 0, 0, 0.1),
    8px 8px 5px 2px rgb(0, 0, 0, 0.1), 10px 10px 8px 0 rgb(0, 0, 0, 0.1),
    inset -4px -4px 10px rgb(0, 0, 0, 0.6);
  transition: box-shadow 0.5s ease-in-out;
}
.floating__toggle:hover,
.floating__link:hover {
  box-shadow: -6px -6px 5px 0px rgb(0, 0, 0, 0.1),
    8px 8px 5px 2px rgb(0, 0, 0, 0.1), -10px -10px 8px 0 rgb(0, 0, 0, 0.1),
    inset -4px -4px 10px rgb(0, 0, 0, 0.6);
}
.floating__toggle:active {
  transform: scale(96%);
  box-shadow: 2px 2px 5px 0px rgb(0, 0, 0, 0.1),
    4px 4px 5px 2px rgb(0, 0, 0, 0.1), -5px -5px 8px 0 rgb(0, 0, 0, 0.1),
    inset -4px -4px 10px rgb(0, 0, 0, 0.6);
}

.floating__link {
  padding: 20px;
  position: absolute;
  border-radius: 100%;
  background: rgba(175, 190, 255, 0.87);
  cursor: pointer;
  box-shadow: 6px 6px 5px 0px rgb(0, 0, 0, 0.1),
    8px 8px 5px 2px rgb(0, 0, 0, 0.1), 10px 10px 8px 0 rgb(0, 0, 0, 0.1),
    inset -4px -4px 10px rgb(0, 0, 0, 0.6);
  transition: all 0.5s ease-in-out;
  z-index: 9;

  opacity: 0;
}
ul {
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.plus_icon {
  transition: all 0.6 ease;
}

.active ~ ul .floating__link {
  opacity: 1;
}
.floating__toggle.active .plus_icon {
  transform: rotate(45deg);
}
.active ~ ul .floating__link:nth-child(1) {
  transform: translate(64px, -64px);
}
.active ~ ul .floating__link:nth-child(2) {
  transform: translateX(128px);
}
.active ~ ul .floating__link:nth-child(3) {
  transform: translate(64px, 64px);
}
</style>
