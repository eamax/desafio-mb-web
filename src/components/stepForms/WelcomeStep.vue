<script setup>
import { ref } from 'vue';
import DefaultInput from '@/components/common/ui/DefaultInput.vue';
import DefaultRadio from '@/components/common/ui/DefaultRadio.vue';

const options = ['Pessoa fisica', 'Pessoa juridica'];
const isValid = ref(false);
const isSelected = ref(false);
const inputValues = ref({
  email: '',
  personaType: ''
});

const emit = defineEmits(['update:isValid', 'update:valuesWelcomeStep']);

const handleEmailValue = (value) => {
  inputValues.value.email = value;
  emit('update:valuesWelcomeStep', { email: inputValues.value.email, personaType: inputValues.value.personaType });
};

const handleRadioValue = (value) => {
  inputValues.value.personaType = value;
  emit('update:valuesWelcomeStep', { email: inputValues.value.email, personaType: inputValues.value.personaType });
};

const handleRadioIsSelected = (value) => {
  isSelected.value = value;
  emit('update:isValid', isValid.value && isSelected.value);
};

const handleValidation = (value) => {
  isValid.value = value;
  emit('update:isValid', isValid.value && isSelected.value);
};
</script>

<template>
  <h1 class="step-title">Seja bem vindo(a)</h1>
  <DefaultInput label="Endereço de e-mail" type="email" @validation="handleValidation"
    @update:value="handleEmailValue" />
  <DefaultRadio :options="options" @update:selected="handleRadioIsSelected" @update:value="handleRadioValue" />
</template>

<style lang="scss" scoped>
.step-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  margin-top: 0;
}
</style>