<script setup>
import DefaultButton from '@/components/common/ui/DefaultButton.vue';

const props = defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  goBack: {
    type: Function,
    required: true
  },
  goForward: {
    type: Function,
    required: true
  }
});

const handleGoBack = () => {
  props.goBack();
};

const handleGoForward = () => {
  props.goForward();
};

function continueTextButton() {
  if (props.currentStep === 4) {
    return 'Cadastrar';
  }
  return 'Continuar';
};
</script>

<template>
  <footer class="row" :class="props.currentStep > 1 ? 'show-back' : ''">
    <div class="col">
      <DefaultButton v-if="props.currentStep > 1" text="Voltar" type="secondary" @click="handleGoBack" />
    </div>
    <div class="col">
      <DefaultButton :text="continueTextButton()" type="primary" @click="handleGoForward" />
    </div>
  </footer>
</template>

<style lang="scss">
.row {
  display: grid;
  column-gap: .5rem;

  &.show-back {
    display: flex;
  }

  .col {
    flex: 1 0 0%;
  }
}
</style>