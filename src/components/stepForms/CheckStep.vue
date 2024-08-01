<script setup>
import { onMounted, ref } from 'vue';
import DefaultInput from '@/components/common/ui/DefaultInput.vue';

const props = defineProps({
  valuesCheckStep: Object
});

const isValid = ref(false);
const emit = defineEmits(['update:isValid', 'update:valuesCheckStep']);

const inputValues = ref({
  email: '',
  nome: '',
  cpf: '',
  dateOfBirth: '',
  socialName: '',
  cnpj: '',
  companyOpeningDate: '',
  phone: '',
  password: ''
});

const validations = ref({});

const handleValidation = (field, value) => {
  validations.value[field] = value;
  isValid.value = Object.values(validations.value).every(v => v);
  emit('update:isValid', isValid.value);
};

const handleValue = (field, value) => {
  inputValues.value[field] = value;
  emit('update:valuesCheckStep', inputValues.value);
};

function transformValues() {
  const values = JSON.parse(JSON.stringify(props.valuesCheckStep));
  if (values.stepOne) {
    inputValues.value.email = values.stepOne.values.email;
  }
  if (values.stepTwo) {
    inputValues.value.nome = values.stepTwo.values.nome;
    inputValues.value.cpf = values.stepTwo.values.cpf;
    inputValues.value.dateOfBirth = values.stepTwo.values.dateOfBirth;
    inputValues.value.socialName = values.stepTwo.values.socialName;
    inputValues.value.cnpj = values.stepTwo.values.cnpj;
    inputValues.value.companyOpeningDate = values.stepTwo.values.companyOpeningDate;
    inputValues.value.phone = values.stepTwo.values.phone;
  }
  if (values.stepThree) {
    inputValues.value.password = values.stepThree.values.password;
  }
}

onMounted(() => {
  transformValues();
});
</script>

<template>
  <h1 class="step-title">Revise suas informações</h1>
  <DefaultInput label="Endereço de e-mail" type="email" @validation="handleValidation"
    @update:value="(value) => handleValue('email', value)"
    :initiate-value="props.valuesCheckStep.stepOne.values.email" />
  <DefaultInput label="Nome" type="nome" @validation="(value) => handleValidation('nome', value)"
    @update:value="(value) => handleValue('nome', value)" :initiate-value="props.valuesCheckStep.stepTwo.values.nome"
    v-if="props.valuesCheckStep.stepTwo.values.nome" />
  <DefaultInput label="CPF" type="cpf" @validation="(value) => handleValidation('cpf', value)"
    @update:value="(value) => handleValue('cpf', value)" :initiate-value="props.valuesCheckStep.stepTwo.values.cpf"
    v-if="props.valuesCheckStep.stepTwo.values.cpf" />
  <DefaultInput label="Data de nascimento" type="data-nascimento"
    @validation="(value) => handleValidation('dateOfBirth', value)"
    @update:value="(value) => handleValue('dateOfBirth', value)"
    :initiate-value="props.valuesCheckStep.stepTwo.values.dateOfBirth"
    v-if="props.valuesCheckStep.stepTwo.values.dateOfBirth" />
  <DefaultInput label="Razão social" type="nome" @validation="(value) => handleValidation('socialName', value)"
    @update:value="(value) => handleValue('socialName', value)"
    :initiate-value="props.valuesCheckStep.stepTwo.values.socialName"
    v-if="props.valuesCheckStep.stepTwo.values.socialName" />
  <DefaultInput label="CNPJ" type="cnpj" @validation="(value) => handleValidation('cnpj', value)"
    @update:value="(value) => handleValue('cnpj', value)" :initiate-value="props.valuesCheckStep.stepTwo.values.cnpj"
    v-if="props.valuesCheckStep.stepTwo.values.cnpj" />
  <DefaultInput label="Data de abertura" type="data-abertura-empresa"
    @validation="(value) => handleValidation('companyOpeningDate', value)"
    @update:value="(value) => handleValue('companyOpeningDate', value)"
    :initiate-value="props.valuesCheckStep.stepTwo.values.companyOpeningDate"
    v-if="props.valuesCheckStep.stepTwo.values.companyOpeningDate" />
  <DefaultInput label="Telefone" type="telefone" @validation="(value) => handleValidation('phone', value)"
    @update:value="(value) => handleValue('phone', value)"
    :initiate-value="props.valuesCheckStep.stepTwo.values.phone" />
  <DefaultInput label="Razão social" type="nome" @validation="(value) => handleValidation('password', value)"
    @update:value="(value) => handleValue('password', value)"
    :initiate-value="props.valuesCheckStep.stepThree.values.password" />
</template>

<style lang="scss" scoped>
.step-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  margin-top: 0;
}
</style>