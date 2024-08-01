<script setup>
import { ref } from 'vue';
import DefaultInput from '@/components/common/ui/DefaultInput.vue';

const isValid = ref(false);
const emit = defineEmits(['update:isValid', 'update:valuesLegalEntityStep']);

const inputValues = ref({
  socialName: '',
  cnpj: '',
  companyOpeningDate: '',
  phone: ''
});

const validations = ref({
  socialName: false,
  cnpj: false,
  companyOpeningDate: false,
  phone: false
});

const handleValidation = (field, value) => {
  validations.value[field] = value;
  isValid.value = Object.values(validations.value).every(v => v);
  emit('update:isValid', isValid.value);
};

const handleValue = (field, value) => {
  inputValues.value[field] = value;
  emit('update:valuesLegalEntityStep', inputValues.value);
};
</script>

<template>
  <h1 class="step-title">Pessoa Jurídica</h1>
  <DefaultInput label="Razão social" type="nome" @validation="(value) => handleValidation('socialName', value)"
    @update:value="(value) => handleValue('socialName', value)" />
  <DefaultInput label="CNPJ" type="cnpj" @validation="(value) => handleValidation('cnpj', value)"
    @update:value="(value) => handleValue('cnpj', value)" />
  <DefaultInput label="Data de abertura" type="data-abertura-empresa"
    @validation="(value) => handleValidation('companyOpeningDate', value)"
    @update:value="(value) => handleValue('companyOpeningDate', value)" />
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