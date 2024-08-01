<template>
  <div class="default-radio">
    <label v-for="(option, index) in props.options" :key="index" class="radio-label">
      <input type="radio" :value="option" v-model="selectedOption" @change="emitSelection" />
      {{ option }}
    </label>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const selectedOption = ref(null);

const emit = defineEmits(['update:selected', 'update:value']);

watch(selectedOption, (newValue) => {
  if (newValue !== null) {
    emit('update:selected', newValue !== null);
    emit('update:value', newValue);
  }
});
</script>

<style lang="scss">
.default-radio {
  margin-bottom: 1rem;

  .radio-label {
    margin-right: 0.5rem;
  }
}
</style>