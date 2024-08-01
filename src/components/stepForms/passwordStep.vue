<script setup>
import { ref } from 'vue';
import DefaultInput from '@/components/common/ui/DefaultInput.vue';

const isValid = ref(false);
const emit = defineEmits(['update:isValid', 'update:valuesPasswordStep']);

const inputValues = ref({
  password: ''
});

const validations = ref({
  password: false
});

const handleValidation = (field, value) => {
  validations.value[field] = value;
  isValid.value = Object.values(validations.value).every(v => v);
  emit('update:isValid', isValid.value);
};

const handleValue = (field, value) => {
  inputValues.value[field] = value;
  emit('update:valuesPasswordStep', inputValues.value);
};
</script>

<template>
  <h1 class="step-title">Senha de acesso</h1>
  <DefaultInput label="Sua Senha" type="nome" @validation="(value) => handleValidation('password', value)"
    @update:value="(value) => handleValue('password', value)" />
</template>

<style lang="scss" scoped>
.step-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  margin-top: 0;
}
</style>