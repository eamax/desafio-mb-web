<script setup>
import { ref } from 'vue';
import FooterForm from '@/components/layout/FooterForm.vue';
import HeaderStepsForm from '@/components/layout/HeaderStepsForm.vue';
import WelcomeStep from '@/components/stepForms/WelcomeStep.vue';
import IndividualStep from '@/components/stepForms/IndividualStep.vue';
import LegalEntityStep from '../stepForms/LegalEntityStep.vue';
import PasswordStep from '../stepForms/passwordStep.vue';
import CheckStep from '../stepForms/CheckStep.vue';

const currentStep = ref(1);

const stepNames = {
  1: 'stepOne',
  2: 'stepTwo',
  3: 'stepThree',
  4: 'stepFour',
};

const getStepName = (step) => stepNames[step] || null;

const steps = ref({
  stepOne: {
    isValid: false,
    values: {
      email: '',
      personaType: ''
    }
  },
  stepTwo: {
    isValid: false,
    values: {}
  },
  stepThree: {
    isValid: false,
    values: {}
  },
  stepFour: {
    isValid: true,
    values: {}
  }
});
const handleStepValidation = (value) => {
  const stepName = getStepName(currentStep.value);
  steps.value[stepName].isValid = value;
};

const handleStepValues = (value) => {
  const stepName = getStepName(currentStep.value);
  steps.value[stepName].values = value;
};

const goBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const goForward = () => {
  const stepName = getStepName(currentStep.value);
  console.log(steps.value[stepName].isValid);
  if (stepName && steps.value[stepName].isValid) {
    if (currentStep.value < 4) {
      currentStep.value++;
    }
  }
};

</script>

<template>
  <main class="register-form">
    <HeaderStepsForm :currentStep="currentStep" />
    <div class="content">
      <WelcomeStep v-if="currentStep === 1" @update:isValid="handleStepValidation"
        @update:valuesWelcomeStep="handleStepValues" />
      <IndividualStep v-if="currentStep === 2 && steps.stepOne.values?.personaType === 'Pessoa fisica'"
        @update:isValid="handleStepValidation" @update:valuesIndividualStep="handleStepValues" />
      <LegalEntityStep v-if="currentStep === 2 && steps.stepOne.values?.personaType === 'Pessoa juridica'"
        @update:isValid="handleStepValidation" @update:valuesLegalEntityStep="handleStepValues" />
      <PasswordStep v-if="currentStep === 3" @update:isValid="handleStepValidation"
        @update:valuesPasswordStep="handleStepValues" />
      <CheckStep v-if="currentStep === 4" @update:isValid="handleStepValidation"
        @update:valuesCheckStep="handleStepValues" :valuesCheckStep="steps" />
    </div>
    <FooterForm :currentStep="currentStep" :go-back="goBack" :go-forward="goForward" />
  </main>
</template>

<style lang="scss">
.register-form {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 5rem 0;
  max-width: 18rem;
  margin: auto;

  .content {
    margin-bottom: 1rem;
  }
}
</style>