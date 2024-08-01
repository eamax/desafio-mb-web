  <script setup>
  import { ref, watch, defineProps } from 'vue';
  import { validateEmail, validateCPF, validateCNPJ, validateDateOfBirth, validatePhone, validateCompanyOpeningDate, validateName } from '@/utils/InputValidation.js';

  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return ['email', 'nome', 'telefone', 'cnpj', 'cpf', 'data-nascimento', 'data-abertura-empresa'].includes(value);
      }
    },
    initiateValue: {
      type: String,
      default: ''
    }
  });

  const emits = defineEmits(['validation', 'update:value']);

  const inputValue = ref(props.initiateValue);
  const errorMessage = ref('');
  const isValid = ref(false);

  const validateInput = () => {
    errorMessage.value = '';
    if (props.type === 'email' && !validateEmail(inputValue.value)) {
      isValid.value = false;
      errorMessage.value = 'Email inválido';
    } else if (props.type === 'cpf' && !validateCPF(inputValue.value)) {
      isValid.value = false;
      errorMessage.value = 'CPF inválido';
    } else if (props.type === 'cnpj' && !validateCNPJ(inputValue.value)) {
      isValid.value = false;
      errorMessage.value = 'CNPJ inválido';
    } else if (props.type === 'telefone' && !validatePhone(inputValue.value)) {
      isValid.value = false;
      errorMessage.value = 'Número de telefone inválido';
    } else if (props.type === 'data-nascimento' && !validateDateOfBirth(inputValue.value)) {
      isValid.value = false;
      errorMessage.value = 'Data inválida (dd-mm-aaaa)';
    } else if (props.type === 'data-abertura-empresa' && !validateCompanyOpeningDate(inputValue.value)) {
      isValid.value = false;
      errorMessage.value = 'Data de abertura da empresa inválida';
    } else if (props.type === 'nome' && !validateName(inputValue.value)) {
      isValid.value = false;
      errorMessage.value = 'Nome inválido';
    } else {
      isValid.value = true;
      errorMessage.value = '';
    }

    emits('validation', isValid.value);
    emits('update:value', inputValue.value);
  };

  watch(inputValue, validateInput);
</script>

  <template>
    <div class="default-input">
      <label class="label">{{ props.label }}</label>
      <input v-model="inputValue" type="text" :placeholder="placeHolder" class="input" />
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
  </template>

<style lang="scss">
.default-input {
  display: flex;
  flex-direction: column;
  gap: .3rem;
  margin-bottom: .6rem;

  .label {
    font-size: 1rem;
    color: #333;
    margin-bottom: .5rem;
    display: block;
  }

  .input {
    font-size: 1rem;
    padding: .5rem 1rem;
    display: block;
  }

  .error-message {
    color: red;
  }
}
</style>
