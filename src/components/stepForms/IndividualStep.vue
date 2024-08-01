<script setup>
import { ref } from 'vue';
import DefaultInput from '@/components/common/ui/DefaultInput.vue';

const isValid = ref(false);
const inputValues = ref({
  nome: '',
  cpf: '',
  dateOfBirth: '',
  phone: ''
});
const emit = defineEmits(['update:isValid', 'update:valuesIndividualStep']);

const validations = ref({
  nome: false,
  cpf: false,
  dateOfBirth: false,
  phone: false
});

const handleValidation = (field, value) => {
  validations.value[field] = value;
  isValid.value = Object.values(validations.value).every(v => v);
  emit('update:isValid', isValid.value);
};

const handleValue = (field, value) => {
  inputValues.value[field] = value;
  emit('update:valuesIndividualStep', inputValues.value);
};
</script>

<template>
  <h1 class="step-title">Pessoa Física</h1>
  <DefaultInput label="Nome" type="nome" @validation="(value) => handleValidation('nome', value)"
    @update:value="(value) => handleValue('nome', value)" />
  <DefaultInput label="CPF" type="cpf" @validation="(value) => handleValidation('cpf', value)"
    @update:value="(value) => handleValue('cpf', value)" />
  <DefaultInput label="Data de nascimento" type="data-nascimento"
    @validation="(value) => handleValidation('dateOfBirth', value)"
    @update:value="(value) => handleValue('dateOfBirth', value)" />
  <DefaultInput label="Telefone" type="telefone" @validation="(value) => handleValidation('phone', value)"
    @update:value="(value) => handleValue('phone', value)" />
</template>

<style lang="scss" scoped>
.step-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  margin-top: 0;
}
</style>