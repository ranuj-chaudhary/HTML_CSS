<template>
  <label>
    <input type="checkbox" class="skeuo__switch" />
    <div class="skeuo__button">
      <i class="bx bx-circle skeuo__circle"></i>
      <i class="bx bx-minus skeuo__line"></i>
    </div>
  </label>
</template>

<script setup></script>

<style lang="scss" scoped>
/*=============== SKEUOMORPHISM BUTTON ===============*/

.skeuo__switch {
  display: none;
}

.skeuo__button {
  width: 6rem;
  background: linear-gradient(90deg, #444650 0%, #101113 100%);
  padding: 0.75rem 1.25rem 0.75rem 1rem;
  border-radius: 3rem;
  box-shadow: inset -2px 0 18px #212227, inset -14px 0 6px #43454f,
    inset 4px 0 6px #151619;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
}

.skeuo__circle {
  font-size: 18px;
  color: #5ccc9d;
}

.skeuo__line {
  transform: rotate(90deg);
  font-size: 22px;
  color: #9699a6;
}

/* Button animation effects */
.skeuo__switch:checked ~ .skeuo__button {
  background: linear-gradient(90deg, #101113 0%, #444650 100%);
  box-shadow: inset -2px 0 18px #212227, inset -4px 0 6px #151619,
    inset 14px 0 6px #43454f;
  padding: 0.75rem 1rem 0.75rem 1.25rem;
}

.skeuo__switch:checked ~ .skeuo__button .skeuo__circle {
  font-size: 20px;
}

.skeuo__switch:checked ~ .skeuo__button .skeuo__line {
  font-size: 18px;
}
</style>
