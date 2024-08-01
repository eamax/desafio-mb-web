<template>
  <p class="header-steps">Etapa <span class="current-step">{{ props.currentStep }}</span> de 4</p>
</template>

<script setup>
const props = defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});
</script>

<style lang="scss">
.header-steps {
  font-size: 1rem;
  color: #333;
  margin-bottom: .5rem;
  margin-top: 0;

  .current-step {
    color: #ff9900;
  }
}
</style>