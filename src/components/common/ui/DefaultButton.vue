<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  text: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['click']);

const buttonClass = props.type;

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <button :class="buttonClass" class="button" @click="handleClick">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  font-size: 1rem;
  border-radius: .25rem;
  padding: .5rem 1rem;
  display: block;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
}

.primary {
  background-color: #ff9900;
  color: #ffffff;
  border: 1px solid #ff9900;

  &:hover {
    background-color: #ff6600;
    border: 1px solid #ff6600;
  }
}

.secondary {
  background-color: #ffffff;
  color: #ff9900;
  border: 1px solid #ff9900;

  &:hover {
    background-color: #f5f5f5;
    border: 1px solid #ff6600;
  }
}
</style>